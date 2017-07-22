var gulp = require('gulp');

var browserify = require('browserify'),
  babelify = require('babelify'),
  buffer = require('vinyl-buffer'),
  notifier = require('node-notifier'),
  reload = require('livereactload'),
  source = require('vinyl-source-stream')
  watchify = require('watchify');

gulp.task('watch', () => {
  var bundler = createBundler(true);
  var watcher = watchify(bundler);
  rebundle();
  return watcher
  .on('error', handleError)
  .on('update', rebundle);

  function rebundle() {
    watcher
    .bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./www/assets'));
  }
});

gulp.task('build', () => {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/assets'));
});

gulp.task('bundle', function () {
  var bundler = createBundler(false);
  bundler
    .bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/assets'));
});

function createBundler(useWatchify) {
  return browserify({
    entries: ['./src/app.js'],
    transform: [ [babelify, {}] ],
    plugin: !useWatchify ? [] : [ reload ],
    cache: {},
    packageCache: {}
  });
}

function handleError(err) {
  console.log(err.stack);
  notifier.notify({
    title: 'Build Error',
    message: err.message
  });
  this.emit('end');
}

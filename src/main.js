Constants = {
    ADD_COMPONENT_ELEM_ID_PREFIX: 'addComponent',
    ADD_COMPONENT_RESULT_MESSAGE_ELEM_ID_PREFIX: 'addComponentResultMessage',
    ADD_TASK_ELEM_ID: 'addTaskInput',
    ADD_TASK_MAX_LENGTH: 255,
    ALERT_ELEM_ID: 'alertElement',
    ASSOCIATION_KEY_ATTRIBUTE: 'association-key',
    ASSOCIATION_LIST_ELEM_ID: 'associationsList',
    ASSOCIATION_LIST_CONTAINER_ELEM_ID: 'associationsContainer',
    ASSOCIATION_CONTENT_CONTAINER_ELEM_ID: 'associationContent',
    ASSOCIATION_VIEW_ELEM_ID: 'associationView',
    AUTHORIZATION_REQUIRED_RESPONSE: 'Authorization Required',
    COMPONENT_CONTAINER_ELEM_ID: 'componentsContainer',
    COMPONENT_ITEM_ELEM_ID_PREFIX: 'componentItem',
    COMPONENT_TASK_LIST_ITEM_ELEM_ID_PREFIX: 'componentTaskListItem',
    COMPONENT_TASK_ITEM_ELEM_ID_PREFIX: 'componentTaskItem',
    COMPONENT_ID_ATTRIBUTE: 'component-id',
    COMPONENT_KEY_ATTRIBUTE: 'component-key',
    COMPONENTS_LOADED_ATTRIBUTE: 'components-loaded',
    CURRENT_ASSOCIATION_ID_ELEM_ID: 'currentAssociationId',
    CURRENT_DIRECTORY_ID_ELEM_ID: 'currentDirectoryId',
    DIRECTORIES_CONTAINER_ELEM_ID: 'directoriesContainer',
    DIRECTORY_ID_ATTRIBUTE: 'directory-id',
    DROPDOWN_ELEM_ID: 'navbarDropdown',
    EDIT_TASK_ELEM_ID_PREFIX: 'editTaskInput',
    ENTER_KEYCODE: 13,
    ITEM_ID_ATTRIBUTE: 'item-id',
    LOADING_COMPONENT_LIST_ELEM_ID: 'loadingComponentList',
    LOADING_COMPONENTS_ELEM_ID: 'loadingComponents',
    LOADING_DIRECTORIES_ELEM_ID: 'loadingDirectories',
    LOADING_ROOT_ELEM_ID: 'loadingRoot',
    LOADING_SIGN_IN_ELEM_ID: 'loadingSignIn',
    LOADING_TASKS_LIST_ELEM_ID: 'loadingTasksList',
    LOADING_TASK_COMPONENT_ELEM_ID: 'loadingTaskComponent',
    LOADING_TASK_COMPONENTS_ELEM_ID: 'loadingTaskComponents',
    MAP_API_KEY: 'AIzaSyAgISl38x3fEnLXxn_2VYumF9b9RsPFVHQ',
    MAP_URL: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAgISl38x3fEnLXxn_2VYumF9b9RsPFVHQ',
    MESSAGE_ID_ATTRIBUTE: 'message-id',
    NAVBAR_ELEM_ID: 'navbar',
    NAVBAR_COMPONENTS_CONTAINER_ELEM_ID: 'navbarComponents',
    NO_TASKS_ELEM_ID: 'noTasksMessage',
    SIGN_IN_ELEM_ID: 'signInContainer',
    SIGN_IN_ERROR_ELEM_ID: 'signInError',
    SIGN_IN_FORM_ELEM_ID: 'signInForm',
    SIGN_IN_PASSWORD_ELEM_ID: 'inputPassword',
    SIGN_IN_USERNAME_ELEM_ID: 'inputUsername',
    SIGN_OUT_ELEM_ID: 'signOutContainer',
    TASK_COMPONENTS_CONTAINER_ELEM_ID_PREFIX: 'taskComponentsContainer',
    TASK_COMPONENTS_TOGGLE_ELEM_ID: 'taskComponentsToggle',
    TASK_CONTAINER_ELEM_ID: 'taskContainer',
    TASK_ELEM_ID_PREFIX: 'taskItem',
    TASK_ID_ATTRIBUTE: 'task-id',
    TASK_LIST_ELEM_ID: 'taskList',
    UPDATE_TASK_NAME_REQUIRED_ELEM_ID_PREFIX: 'updateTaskNameRequired',
    USER_ID_ATTRIBUTE: 'user-id',

    ComponentType: {
        TASK_ADDON: 1,
        TASK_LIST: 2
    },

    CssClass: {
        BUTTON_COMPONENT_DEFAULT: 'btn-component_default',
        COMPONENT_HEADER: 'component-header',
        COMPONENT_ITEM: 'component-item',
        COMPONENT_SUCCESS_MESSAGE: 'component-success-message',
        COMPONENTS_EXPANDED: 'components-expanded',
        FORM_CONTROL_DEFAULT: 'form-control-default',
        INLINE_ACTION_RESULT_MESSAGE_FAILURE: 'inline-action-result-message red',
        INLINE_ACTION_RESULT_MESSAGE_SUCCESS: 'inline-action-result-message green',
        LOAD_TASK_COMPONENTS: 'load-task-components',
        GREEN: 'green',
        ITEM_LIST_COMPONENT: 'item-list-component',
        RED: 'red',
        SIDEBAR_HEADER: 'sidebar-header',
        TASK_ITEM: 'task-item',
        TASK_LIST: 'tasks-container',
        TASK_LIST_MESSAGE: 'item-list-message'
    },

    UserRole: {
        SUPERADMIN: 1,
        ADMIN: 2,
        USER: 3
    }
};

Resources = {
    ADD_A_TASK: 'Add a cazzie',
    ADD_COMPONENT_TO_CURRENT_DIRECTORY: 'Add component to current directory',
    ADDED_EXCL: 'Added!',
    COMPONENTS_HEADER: 'Components',
    ERROR_ADDING_ITEM: 'There was an error while trying to add your game',
    ERROR_LOADING_COMPONENTS: 'There as an error while trying to load your components',
    ERROR_LOADING_DIRECTORIES: 'There was an error while trying to load your folders',
    ERROR_LOADING_GAMES: 'There was an error while trying to load your games',
    ERROR_LOADING_PAGE: 'There was an error while trying to load this page',
    ERROR_LOADING_TASK_COMPONENT: 'Error loading component data',
    FOLDERS_HEADER: 'Folders',
    INVALID_PAGE: 'The page you requested is invalid',
    INVALID_SIGNIN_CREDENTIALS: 'Your username or password was invalid',
    LOADING_ASSOCIATIONS: 'Loading your associations...',
    LOADING_DIRECTORIES: 'Loading folders...',
    LOADING_TASKS: 'Loading cazzies...',
    NEW_GAME: 'New game',
    NO_GAMES_TO_LOAD: 'No games yet...',
    NO_TASKS_TO_LOAD: 'No cazzies yet...',
    PASSWORD: 'Password',
    PASSWORD_IS_REQUIRED: 'Your password is required',
    SAVED_SUCCESSFULLY: 'Saved successfully!',
    SIGN_IN: 'Sign in',
    SIGN_OUT: 'Sign out',
    SIGN_IN_HEADER: 'Sign In',
    TASK_NAME_IS_REQUIRED: 'A value is required',
    UNKNOWN_SIGNIN_ERROR: 'There was an error while trying to sign you in',
    USERNAME: 'Username',
    USERNAME_IS_REQUIRED: 'Your username is required'
};

GenericHelper = {
    newGuid: function() {
        return Math.random().toString(36).substring(2) 
        + (new Date()).getTime().toString(36);
    }
};

AjaxHelper = {
    getJsonRequest: function (args) {
        this.request({
            url: args.url,
            method: 'GET',
            contentType: 'application/json',
            callback: args.callback,
            callbackArgs: args.callbackArgs
        });
    },

    postJsonRequest: function (args) {
        this.request({
            url: args.url,
            method: 'POST',
            contentType: 'application/json',
            content: args.content ? JSON.stringify(args.content) : '',
            callback: args.callback,
            callbackArgs: args.callbackArgs
        });
    },

    putJsonRequest: function (args) {
        this.request({
            url: args.url,
            method: 'PUT',
            contentType: 'application/json',
            content: JSON.stringify(args.content),
            callback: args.callback,
            callbackArgs: args.callbackArgs
        });
    },

    getRequest: function (args) {
        this.request({
            url: args.url,
            method: 'GET',
            callback: args.callback,
            callbackArgs: args.callbackArgs
        });
    },

    request: function (args) {
        var httpRequest = new XMLHttpRequest();
        if (!('withCredentials' in httpRequest)) httpRequest = new XDomainRequest(); // fix IE8/9

        if (!httpRequest) return false;

        httpRequest.onreadystatechange = function () { AjaxHelper.response(httpRequest, args.callback, args.callbackArgs); };
        httpRequest.open(args.method, args.url);
        httpRequest.withCredentials = true;

        if (args.contentType) {
            httpRequest.setRequestHeader("Content-Type", args.contentType);
        }

        if (args.authorization) {
            httpRequest.setRequestHeader("Authorization", args.authorization);
        }

        httpRequest.send(args.content);
    },

    response: function (httpRequest, callbackFunction, callbackArgs) {
        if (httpRequest.readyState === XMLHttpRequest.DONE && callbackFunction) {
            if (httpRequest.status === 200) {
                callbackFunction(httpRequest.responseText, callbackArgs);
            } else {
                callbackFunction('{ "status": ' + httpRequest.status + ', "message": "' + httpRequest.responseText + '" }', callbackArgs);
            }
        }
    }

};

ElementHelper = {
    cancelActiveElementDelegates: [],

    addLoadingElement: function (parent, childId) {
        this.appendChildElement({
            parentElement: typeof parent === 'string' ? document.getElementById(parent) : parent,
            childElement: this.createLoadingElement(childId)
        });
    },

    appendChildElement: function (args) {
        var childElement;
        if (args.childElement) {
            childElement = args.childElement;
        } else {
            childElement = document.createElement(args.childElementType);
            childElement.id = args.childElementId ? args.childElementId : '',
                childElement.innerHTML = args.childElementText;
            childElement.className = args.childElementClass ? args.childElementClass : '';
        }
        var parentElement = args.parentElement ? args.parentElement : document.getElementById(args.parentElementId);
        parentElement.appendChild(childElement);
    },

    appendHyperlinkedChildElement: function (args) {
        var childElement = document.createElement(args.childElementType);
        childElement.className = args.childElementClass ? args.childElementClass : '';
        var anchorElement = document.createElement('a');
        anchorElement.href = args.link;
        anchorElement.innerHTML = args.childElementText;
        anchorElement.className = args.linkElementClass ? args.linkElementClass : '',
        childElement.appendChild(anchorElement);
        args.parentElement.appendChild(childElement);
    },

    cancelActiveElements: function() {
        while (this.cancelActiveElementDelegates.length > 0) {
            var delegate = this.cancelActiveElementDelegates.pop();
            delegate();
        }
    },

    clearChildElements: function (args) {
        while (args.parentElement.lastChild) {
            this.removeChildElement({
                parentElement: args.parentElement,
                childElement: args.parentElement.lastChild
            });
        }
    },

    clearSelectOptions: function (args) {
        for (var i = args.parentElement.options.length - 1 ; i >= 0 ; i--) {
            args.parentElement.remove(i);
        }
    },

    createErrorMessageElement: function (args) {
        var error = document.createElement('span');
        error.id = args.elementId;
        error.className = Constants.CssClass.RED;
        error.innerHTML = args.message;
        return error;
    },

    createIconElement: function (type, color) {
        var i = document.createElement('i');
        i.className = 'fa fa-' + type;
        if (color) {
            i.className += ' ' + color;
        }
        return i;
    },

    createInputElement: function (args) {
        var element = document.createElement('input');
        element.id = args.elementId;
        element.type = args.elementType;
        element.className = args.elementClass ? args.elementClass : '';
        element.value = args.elementValue ? args.elementValue : '';
        if (args.elementAttributes) {
            for (var i = 0; i < args.elementAttributes.length; i++) {
                element.setAttribute(args.elementAttributes[i][0], args.elementAttributes[i][1]);
            }
        }
    
        return element;
    },

    createLoadingElement: function (id) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var img = document.createElement('img');
        img.src = 'assets/loading.svg';
        div.id = id ? id : 'loadingElement';
        div.className = 'loading-container';
        div.appendChild(span);
        div.appendChild(img);
        return div;
    },

    createTextInputElement: function (args) {
        return this.createInputElement({
            elementId: args.elementId,
            elementType: 'text',
            elementClass: args.elementClass,
            elementValue: args.elementValue,
            elementAttributes: args.elementAttributes
        });
    },

    findParentElementByClassName: function (element, className) {
        while ((element = element.parentElement) && !element.classList.contains(className));
        return element;
    },

    prependChildElement: function (args) {
        if ((args.childElement && document.getElementById(args.childElement.id)) 
            || (args.childElementId && document.getElementById(args.childElementId))) {
            return;
        }
    
        var childElement;
        if (args.childElement) {
            childElement = args.childElement;
        } else {
            childElement = document.createElement(args.childElementType);
            childElement.id = args.childElementId ? args.childElementId : '',
            childElement.innerHTML = args.childElementText;
            childElement.className = args.childElementClass ? args.childElementClass : '';
            if (args.childElementAttributes) {
                for (var i = 0; i < args.childElementAttributes.length; i++) {
                    childElement.setAttribute(args.childElementAttributes[i][0], args.childElementAttributes[i][1]);
                }
            }
        }
    
        var parentElement = args.parentElement ? args.parentElement : document.getElementById(args.parentElementId);
        parentElement.insertBefore(childElement, parentElement.firstChild);
    },

    removeChildElement: function (args) {
        var childElement = args.childElement ? args.childElement : document.getElementById(args.childElementId);
        var parentElement = args.parentElement ? args.parentElement : document.getElementById(args.parentElementId);
        if (childElement) parentElement.removeChild(childElement);
    },

    removeLoadingElement: function (parent, childId) {
        this.removeChildElement({
            parentElement: typeof parent === 'string' ? document.getElementById(parent) : parent,
            childElementId: childId
        });
    },

    replaceChildElement: function (args) {
        var childElement = args.childElement ? args.childElement : document.getElementById(args.childElementId);
        var parentElement = args.parentElement ? args.parentElement : document.getElementById(args.parentElementId);
        if (parentElement && childElement && args.newElement) parentElement.replaceChild(args.newElement, childElement);
    }
};

EventHelper = {
    isEnter: function (e) {
        return e.which === 13 || e.keyCode === 13;
    },

    isEsc: function (e) {
        return e.which === 27 || e.keyCode === 27;
    },

    resizeEventHandlers: { }
};

UrlHelper = {
    init: function (url) {
        this.routes = { };
        // TODO: convert list array to object and search by object key
        this.routes.list = url.split('/').slice(3);
        this.routes.has = function (key) {
            if (this.list.length > 0 && key === Constants.ASSOCIATION_KEY_ATTRIBUTE) return true;
            return false;
        };
        this.routes.get = function (key) {
            if (this.list.length > 0 && key === Constants.ASSOCIATION_KEY_ATTRIBUTE) return this.list[0];
        };
    },
};

UserInteractor = {
    init: function() {
        var signInBtn = document.createElement('button');
        signInBtn.type = 'button';
        signInBtn.className = 'btn btn-primary';
        signInBtn.innerHTML = Resources.SIGN_IN;
        signInBtn.onclick = this.signInBtnEventHandler;
        var signInBtnContainer = document.getElementById('signInFooter');
        signInBtnContainer.appendChild(signInBtn);
        
        document.getElementById('inputUsername').onkeypress = this.signInInputEventHandler;
        document.getElementById('inputPassword').onkeypress = this.signInInputEventHandler;
    },

    getUserSession: function () {
        if (sessionStorage.user) {
            return JSON.parse(sessionStorage.user);
        } else {
            // this.expireUserSession();
        }
    },

    setUserSession: function (user) {
        sessionStorage.user = JSON.stringify(user);
    },

    expireUserSession: function (args) {
        AjaxHelper.getRequest({
            url: Config.API_URL + '/users/expire',
            callback: function () {
                delete sessionStorage.user;
                document.dispatchEvent(new CustomEvent("onsignout"));
            }
        });
    },

    authenticateUser: function () {
        $('#signInForm').modal({ backdrop: 'static', keyboard: false, show: true });
    },

    authenticateUserRequest: function(request) {
        if (this.validateUsername(request.usernameElem) && this.validatePassword(request.passwordElem)) {
            ElementHelper.addLoadingElement(Constants.SIGN_IN_FORM_ELEM_ID, Constants.LOADING_SIGN_IN_ELEM_ID);
            
            AjaxHelper.postJsonRequest({
                url: Config.API_URL + '/users/authenticate',
                content: { Username: request.usernameElem.value, Password: request.passwordElem.value },
                callback: this.authenticateUserRequestCallback
            });
        }
    },
    
    authenticateUserRequestCallback: function (response, args) {
        ElementHelper.removeLoadingElement(Constants.SIGN_IN_FORM_ELEM_ID, Constants.LOADING_SIGN_IN_ELEM_ID);

        var resultJson = JSON.parse(response);
        if (resultJson.status && resultJson.status !== 200) {
            if (!document.getElementById(Constants.SIGN_IN_ERROR_ELEM_ID)) {
                var message = resultJson.message === Constants.AUTHORIZATION_REQUIRED_RESPONSE ? Resources.INVALID_SIGNIN_CREDENTIALS
                    : Resources.UNKNOWN_SIGNIN_ERROR;
    
                var signInHeader = document.getElementById('signInHeader');
                signInHeader.insertBefore(ElementHelper.createErrorMessageElement({ elementId: Constants.SIGN_IN_ERROR_ELEM_ID, message: message }), signInHeader.lastChild.nextSibling);
            }
        } else {
            UserInteractor.setUserSession(resultJson);
            document.dispatchEvent(new CustomEvent("onsignin"));
            ElementHelper.removeChildElement({ parentElementId: 'signInHeader', childElementId: Constants.SIGN_IN_ERROR_ELEM_ID });
            $('#signInForm').modal('hide');
        }
    },

    /*
     * Validation
     */

    validateUsername: function (usernameElem) {
        var usernameRequiredId = 'usernameRequired';
        if (usernameElem.value.trim() === '') {
            if (usernameElem.previousSibling.id !== usernameRequiredId) {
                var usernameRequired = document.createElement('span');
                usernameRequired.id = usernameRequiredId;
                usernameRequired.className = Constants.CssClass.RED;
                usernameRequired.innerHTML = Resources.USERNAME_IS_REQUIRED;
                usernameElem.parentElement.insertBefore(usernameRequired, usernameElem);
            }
            return false;
        } else if (usernameElem.previousSibling.id === usernameRequiredId) {
            usernameElem.parentElement.removeChild(usernameElem.previousSibling);
        }

        return true;
    },

    validatePassword: function (passwordElem) {
        var passwordRequiredId = 'passwordRequired';
        if (passwordElem.value.trim() === '') {
            if (passwordElem.previousSibling.id !== passwordRequiredId) {
                var passwordRequired = document.createElement('span');
                passwordRequired.id = passwordRequiredId;
                passwordRequired.className = Constants.CssClass.RED;
                passwordRequired.innerHTML = Resources.PASSWORD_IS_REQUIRED;
                passwordElem.parentElement.insertBefore(passwordRequired, passwordElem);
            }
            return false;
        } else if (passwordElem.previousSibling.id === passwordRequiredId) {
            passwordElem.parentElement.removeChild(passwordElem.previousSibling);
        }

        return true;
    },

    /*
     * Event Handlers
     */

    signInBtnEventHandler: function(e) {
        var usernameElem = document.getElementById(Constants.SIGN_IN_USERNAME_ELEM_ID);
        var passwordElem = document.getElementById(Constants.SIGN_IN_PASSWORD_ELEM_ID);
        UserInteractor.authenticateUserRequest({ usernameElem: usernameElem, passwordElem: passwordElem });
    },

    signInInputEventHandler: function(e) {
        if (EventHelper.isEnter(e)) {
            var usernameElem = document.getElementById(Constants.SIGN_IN_USERNAME_ELEM_ID);
            var passwordElem = document.getElementById(Constants.SIGN_IN_PASSWORD_ELEM_ID);
            UserInteractor.authenticateUserRequest({ usernameElem: usernameElem, passwordElem: passwordElem });
        }
    }
};

BaseComponentInteractor = {
    createComponentElement: function (args) {
        switch (args.componentType) {
            case Constants.ComponentType.TASK_ADDON:
                return this.createItemAddonComponentElement(args);
            case Constants.ComponentType.TASK_LIST:
                return this.createItemListComponentElement(args);
            default:
                return undefined;
        }
    },
    createItemAddonComponentElement: function (args) {
        if (args.bodyElement) {
            var hr = document.createElement('hr');
            var headerText = document.createElement('div');
            headerText.className = Constants.CssClass.COMPONENT_HEADER;
            headerText.appendChild(args.headerTextElement);
            headerText.appendChild(hr);
            var actionsWrapper = document.createElement('div');
            actionsWrapper.className = 'component-action';
            if (args.isSettings) {
                var settings = ElementHelper.createIconElement('cog');
                settings.onclick = this.settingsClickEventHandler;
                actionsWrapper.appendChild(settings);
            }
            var header = document.createElement('div');
            header.className = 'row';
            header.appendChild(headerText);
            header.appendChild(actionsWrapper);
            var body = document.createElement('div');
            body.className = 'component-body';
            body.classList.add(args.key);
            body.appendChild(args.bodyElement);
            var container = document.createElement('div');
            container.className = 'component-container';
            container.setAttribute(Constants.TASK_ID_ATTRIBUTE, args.itemId);
            container.setAttribute(Constants.COMPONENT_ID_ATTRIBUTE, (args.componentData && args.componentData.id ? args.componentData.id : 0));
            container.appendChild(header);
            container.appendChild(body);
            return container;
        }
    },
    createItemListComponentElement: function (args) {
        if (args.bodyElement) {
            var container = document.createElement('div');
            container.className = 'component-body';
            container.classList.add(args.key);
            container.appendChild(args.bodyElement);
            return container;
        }
    },
    addOrUpdateComponentBodyElement: function (componentContainer, currentElement, newElement) {
        if (currentElement) {
            ElementHelper.replaceChildElement({
                parentElement: currentElement.parentElement,
                childElement: currentElement,
                newElement: newElement
            });
        } else {
            componentContainer.getElementsByClassName('component-body')[0]
                .appendChild(newElement);
        }
    },
    displayRequestActionResultMessage: function (args) {
        var message = document.createElement('div');
        var messageId = GenericHelper.newGuid();
        message.id = messageId;
        message.innerHTML = args.message;
        message.className = args.isSuccess ? Constants.CssClass.GREEN : Constants.CssClass.RED;
        args.parentElement.appendChild(message);
        setTimeout(function() { 
            ElementHelper.removeChildElement({
                parentElement: args.parentElement,
                childElement: message
            });            
        }, 4000);
    },
    settingsClickEventHandler: function (e) {
        var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
        var settings = container.getElementsByClassName('component-settings')[0];
        if (settings.style.display === '') $(settings).slideUp();
        else $(settings).slideDown();
    }
};

ComponentInteractor = {
    components: {
        event: {
            key: 'event',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Game Time';
                headerText.className = 'component-header-text';
                return BaseComponentInteractor.createComponentElement({
                    isSettings: true,
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (args) {
                var container = document.createElement('div');
                container.className = 'component-body';
                var settings = this.createSettingsElement(args);
                container.appendChild(settings);
                if (args.componentData.data && args.componentData.data.EventDate && args.componentData.data.EventTime) {
                    settings.style.display = 'none';
                    var datetime = this.createDateTimeElement(args.componentData.data.EventDate, args.componentData.data.EventTime);
                    container.appendChild(datetime);
                }
                return container;
            },
            createSettingsElement: function (args) {
                var dateInput = document.createElement('input');
                dateInput.type = 'text';
                dateInput.className = 'form-control add-item';
                dateInput.placeholder = this.Resources.EVENT_DATE;
                dateInput.value = args.componentData.data && args.componentData.data.EventDate ? args.componentData.data.EventDate : '';
                dateInput.onkeypress = this.dateTimeKeyPressEventHandler;
                $(dateInput).datepicker({ format: 'yyyy-mm-dd' });
                var timeInput = document.createElement('input');
                timeInput.type = 'text';
                timeInput.className = 'form-control add-item';
                timeInput.placeholder = this.Resources.EVENT_TIME;
                timeInput.value = args.componentData.data && args.componentData.data.EventTime ? args.componentData.data.EventTime : '';
                timeInput.onkeypress = this.dateTimeKeyPressEventHandler;
                $(timeInput).timepicker({ 'timeFormat': 'h:i A' });
                var dateInputWrapper = document.createElement('div');
                dateInputWrapper.className = 'col-xs-6';
                dateInputWrapper.appendChild(dateInput);
                var timeInputWrapper = document.createElement('div');
                timeInputWrapper.className = 'col-xs-6';
                timeInputWrapper.appendChild(timeInput);
                var container = document.createElement('div');
                container.className = 'row component-settings';
                container.appendChild(dateInputWrapper);
                container.appendChild(timeInputWrapper);
                return container;
            },
            createDateTimeElement: function (eventDate, eventTime) {
                var eventDateTime = new Date(eventDate + ' ' + eventTime);
                var datetime = document.createElement('div');
                datetime.className = 'event-date-time';
                datetime.innerHTML = eventDateTime.toDateString() + ' @ ' + eventDateTime.toLocaleTimeString();
                return datetime;
            },
            addOrUpdateDateTime: function (request) {
                if (request.dateElement.value.trim() !== '' && request.timeElement.value.trim() !== '') {
                    var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                    var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                    AjaxHelper.postJsonRequest({
                        url: Config.API_URL + '/tasks/' + itemId + '/components',
                        content: { 
                            ComponentId: componentId,
                            Data: {
                                EventDate: request.dateElement.value,
                                EventTime: request.timeElement.value
                            }
                        },
                        callbackArgs: {
                            componentContainer: request.componentContainer
                        },
                        callback: function (response, args) {
                            var key = 'event';
                            var resultJson = JSON.parse(response);
                            if (resultJson.status && resultJson.status === 'OK') {
                                var currentElement = args.componentContainer.getElementsByClassName('event-date-time')[0];
                                var newElement = ComponentInteractor.components[key].createDateTimeElement(resultJson.Data.Data.EventDate, resultJson.Data.Data.EventTime);
                                
                                BaseComponentInteractor.addOrUpdateComponentBodyElement(args.componentContainer, currentElement, newElement);
                                
                                var settings = args.componentContainer.getElementsByClassName('component-settings')[0];
                                $(settings).slideUp();

                                BaseComponentInteractor.displayRequestActionResultMessage({
                                    parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                    message: ComponentInteractor.components[key].Resources.EVENT_DATETIME_SAVED,
                                    isSuccess: true
                                });
                            } else {
                                BaseComponentInteractor.displayRequestActionResultMessage({
                                    parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                    message: ComponentInteractor.components[key].Resources.EVENT_DATETIME_SAVE_ERROR,
                                    isSuccess: false
                                });
                            }
                        }
                    });
                }
            },
            dateTimeKeyPressEventHandler: function (e) {
                if (EventHelper.isEnter(e)) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                    var dateInput = container.getElementsByTagName('input')[0];
                    var timeInput = container.getElementsByTagName('input')[1];

                    ComponentInteractor.components['event'].addOrUpdateDateTime({ dateElement: dateInput, timeElement: timeInput, componentContainer: container });
                }
            },
            Resources: {
                EVENT: 'Event',
                EVENT_DATE: 'Game date...',
                EVENT_DATETIME_SAVED: 'Saved!',
                EVENT_DATETIME_SAVE_ERROR: 'There was an error saving your date/time',
                EVENT_TIME: 'Game time...',
                NO_DATE_TIME_YET: 'No date/time yet...'
            }
        },
        attendance: {
            key: 'attendance',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Attendance';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (request) {
                var container = document.createElement('div');
                var currentUser = UserInteractor.getUserSession();
                var checkboxId = 'userAttendance' + request.itemId;
                var checkbox = document.createElement('input');
                checkbox.id = checkboxId;
                checkbox.type = 'checkbox';
                checkbox.value = 'None';
                checkbox.onclick = this.isAttendingClickEventHandler;
                var checkboxLabel = document.createElement('label');
                checkboxLabel.htmlFor = checkboxId;
                checkboxLabel.innerHTML = currentUser.FirstName + ' ' + currentUser.LastName;
                var currentUserContainer = document.createElement('div');
                currentUserContainer.className = 'row current-user';
                currentUserContainer.appendChild(checkbox);
                currentUserContainer.appendChild(checkboxLabel);
                container.appendChild(currentUserContainer);

                var users = request.componentData.data;
                var userRow = document.createElement('div');
                userRow.className = 'row';
                for (var i = 0; i < users.length; i++) {
                    if (users[i].UserId !== currentUser.Id) {
                        var isAttendingIcon = ElementHelper.createIconElement(users[i].IsAttending ? 'check' : 'times');
                        var username = document.createElement('span');
                        username.innerHTML = users[i].FirstName + ' ' + users[i].LastName;
                        var isAttendingContainer = document.createElement('div');
                        isAttendingContainer.className = 'col-xs-6 col-sm-3 col-md-2';
                        isAttendingContainer.appendChild(isAttendingIcon);
                        isAttendingContainer.appendChild(username);
                        userRow.appendChild(isAttendingContainer);
                    } else {
                        checkbox.checked = users[i].IsAttending;
                    }
                }
                container.appendChild(userRow);
                return container;
            },
            addOrUpdateIsAttending: function (request) {
                var currentUser = UserInteractor.getUserSession();
                var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                AjaxHelper.postJsonRequest({
                    url: Config.API_URL + '/tasks/' + itemId + '/components',
                    content: { 
                        ComponentId: componentId,
                        Data: {
                            UserId: currentUser.Id,
                            IsAttending: request.isAttendingElement.checked
                        }
                    },
                    callbackArgs: {
                        isAttending: request.isAttendingElement.checked,
                        componentContainer: request.componentContainer
                    },
                    callback: function (response, args) {
                        var key = 'attendance';
                        var resultJson = JSON.parse(response);
                        if (resultJson.status && resultJson.status === 'OK') {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: args.isAttending ? ComponentInteractor.components[key].Resources.ATTENDANCE_CONFIRMED : ComponentInteractor.components[key].Resources.ATTENDANCE_UNCONFIRMED,
                                isSuccess: true
                            });
                        } else {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: args.isAttending ? ComponentInteractor.components[key].Resources.ATTENDANCE_CONFIRM_ERROR : ComponentInteractor.components[key].Resources.ATTENDANCE_UNCONFIRM_ERROR,
                                isSuccess: false
                            });
                        }
                    }
                });
            },
            isAttendingClickEventHandler: function (e) {
                var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                ComponentInteractor.components['attendance'].addOrUpdateIsAttending({ isAttendingElement: e.target, componentContainer: container });
            },
            Resources: {
                ATTENDANCE: 'Attendance',
                ATTENDANCE_CONFIRM_ERROR: 'An error occurred while confirming your attendance',
                ATTENDANCE_CONFIRMED: 'Your attendance has been confirmed',
                ATTENDANCE_UNCONFIRM_ERROR: 'An error occurred while confirming your absence',
                ATTENDANCE_UNCONFIRMED: 'Your absence has been confirmed'
            }
        },
        location: {
            key: 'location',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Location';
                return BaseComponentInteractor.createComponentElement({
                    isSettings: true,
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (args) {
                var container = document.createElement('div');
                container.className = 'component-body';
                var settings = this.createSettingsElement(args);
                container.appendChild(settings);
                if (args.componentData.data && args.componentData.data.Location) {
                    settings.style.display = 'none';
                    container.appendChild(this.createLocationMapElement(args.componentData.data.Location));
                }
                return container;
            },
            createSettingsElement: function (args) {
                var locationInput = document.createElement('input');
                locationInput.type = 'text';
                locationInput.className = 'form-control add-item';
                locationInput.placeholder = this.Resources.ENTER_LOCATION;
                locationInput.value = args.componentData.data && args.componentData.data.Location ? args.componentData.data.Location : '';
                locationInput.onkeypress = this.locationInputKeyPressEventHandler;
                var locationInputWrapper = document.createElement('div');
                locationInputWrapper.className = 'col-md-12';
                locationInputWrapper.appendChild(locationInput);
                var container = document.createElement('div');
                container.className = 'row component-settings';
                container.appendChild(locationInputWrapper);
                return container;
            },
            createLocationMapElement: function (location) {
                var map = document.createElement('iframe');
                map.frameBorder = 0;
                map.marginWidth = 0;
                map.marginHeight = 0;
                map.scrolling = 'no';
                map.innerHTML = 'Loading...';
                map.className = 'location-map';
                map.src = Constants.MAP_URL + '&q=' + location.replace(' ', '+');
                return map;
            },
            addOrUpdateLocation: function (request) {
                if (request.locationElement.value.trim() !== '') {
                    var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                    var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                    AjaxHelper.postJsonRequest({
                        url: Config.API_URL + '/tasks/' + itemId + '/components',
                        content: { 
                            ComponentId: componentId,
                            Data: {
                                Location: request.locationElement.value
                            }
                        },
                        callbackArgs: {
                            componentContainer: request.componentContainer
                        },
                        callback: function (response, args) {
                            var key = 'location';
                            var resultJson = JSON.parse(response);
                            if (resultJson.status && resultJson.status === 'OK') {
                                var currentElement = args.componentContainer.getElementsByClassName('location-map')[0];
                                var newElement = ComponentInteractor.components[key].createLocationMapElement(resultJson.Data.Data.Location);
                                
                                BaseComponentInteractor.addOrUpdateComponentBodyElement(args.componentContainer, currentElement, newElement);
                                
                                var settings = args.componentContainer.getElementsByClassName('component-settings')[0];
                                $(settings).slideUp();
                                
                                BaseComponentInteractor.displayRequestActionResultMessage({
                                    parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                    message: ComponentInteractor.components[key].Resources.LOCATION_SAVED,
                                    isSuccess: true
                                });
                            } else {
                                BaseComponentInteractor.displayRequestActionResultMessage({
                                    parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                    message: ComponentInteractor.components[key].Resources.LOCATION_SAVE_ERROR,
                                    isSuccess: false
                                });
                            }
                        }
                    });
                }
            },
            locationInputKeyPressEventHandler: function (e) {
                if (EventHelper.isEnter(e)) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                    var locationInput = container.getElementsByTagName('input')[0];

                    ComponentInteractor.components['location'].addOrUpdateLocation({ locationElement: locationInput, componentContainer: container });
                }
            },
            Resources: {
                ADD_UPDATE_LOCATION: 'Add or update location',
                ENTER_LOCATION: 'Enter location...',
                LOCATION: 'Location',
                LOCATION_SAVED: 'Location saved!',
                LOCATION_SAVE_ERROR: 'There was an error saving your location',
                NO_LOCATION_YET: 'No location yet...'
            }
        },
        messaging: {
            key: 'messaging',
            intervals: [],
            init: function (request) {
                document.addEventListener("onsignout", this.onSignOutEventHandler);
                // this.getNewMessages({ componentContainer: request.componentElement }); // TODO: maybe move this to a handler for custom events, e.g. "oncomponentloaded"
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Messages';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (args) {
                var addMessageElement = this.createAddMessageElement(args);
                var messagesContainer = document.createElement('div');
                messagesContainer.className = 'messages-container';
                if (args.componentData.data && args.componentData.data.length > 0) {
                    var messages = args.componentData.data;
                    for (var i = 0; i < messages.length; i++) {
                        var messageElement = this.createMessageElement(messages[i]);
                        ElementHelper.prependChildElement({ parentElement: messagesContainer, childElement: messageElement });
                    }
                }
                var container = document.createElement('div');
                container.className = 'component-body';
                container.appendChild(addMessageElement);
                container.appendChild(messagesContainer);
                return container;
            },
            createAddMessageElement: function (args) {
                var messageInput = document.createElement('input');
                messageInput.type = 'text';
                messageInput.className = 'form-control add-item';
                messageInput.placeholder = this.Resources.MESSAGE;
                messageInput.onkeypress = this.messageInputKeyPressEventHandler;
                var messageInputWrapper = document.createElement('div');
                messageInputWrapper.className = 'col-md-12';
                messageInputWrapper.appendChild(messageInput);
                var container = document.createElement('div');
                container.className = 'row component-settings';
                container.appendChild(messageInputWrapper);
                return container;
            },
            createMessageElement: function (args) {
                var user = document.createElement('span');
                user.className = 'user';
                user.innerHTML = args.FirstName + ' ' + args.LastName;
                var messageDateTime = new Date(args.CreateTimestamp);
                var datetime = document.createElement('span');
                datetime.className = 'date-time';
                datetime.innerHTML = messageDateTime.toDateString() + ' @ ' + messageDateTime.toLocaleTimeString();
                var message = document.createElement('div');
                message.className = 'message';
                message.innerHTML = args.Message;
                var container = document.createElement('div');
                container.className = 'message-container';
                container.setAttribute(Constants.MESSAGE_ID_ATTRIBUTE, args.Id);
                container.appendChild(user);
                container.appendChild(datetime);
                container.appendChild(message);
                return container;
            },
            addMessage: function (request) {
                if (request.messageInput.value.trim() !== '') {
                    var currentUser = UserInteractor.getUserSession();
                    var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                    var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                    AjaxHelper.postJsonRequest({
                        url: Config.API_URL + '/tasks/' + itemId + '/components',
                        content: { 
                            ComponentId: componentId,
                            Data: {
                                UserId: currentUser.Id,
                                Message: request.messageInput.value.trim()
                            }
                        },
                        callbackArgs: {
                            componentContainer: request.componentContainer
                        },
                        callback: function (response, args) {
                            var key = 'messaging';
                            var resultJson = JSON.parse(response);
                            if (resultJson.status && resultJson.status === 'OK') {
                                var messagesContainer = args.componentContainer.getElementsByClassName('messages-container')[0];
                                var messageElement = ComponentInteractor.components[key].createMessageElement(resultJson.Data.Data);
                                ElementHelper.prependChildElement({ parentElement: messagesContainer, childElement: messageElement });
                                args.componentContainer.getElementsByTagName('input')[0].value = '';
                            } else {
                                BaseComponentInteractor.displayRequestActionResultMessage({
                                    parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                    message: ComponentInteractor.components[key].Resources.ERROR_SAVING_MESSAGE,
                                    isSuccess: false
                                });
                            }
                        }
                    });
                }
            },
            getNewMessages: function (request) {
                var interval = setInterval(function () {
                    var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                    var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                    var lastMessageElement = request.componentContainer.getElementsByClassName('message-container')[0];
                    var lastMessageId = lastMessageElement ? parseInt(lastMessageElement.getAttribute(Constants.MESSAGE_ID_ATTRIBUTE)) : 0;
                    AjaxHelper.getJsonRequest({
                        url: Config.API_URL + '/tasks/' + itemId + '/components/' + componentId + '?lastmessageid=' + lastMessageId,
                        callbackArgs: {
                            originalRequest: request
                        },
                        callback: function (response, args) {
                            var key = 'messaging';
                            var resultJson = JSON.parse(response);
                            if (resultJson.status && resultJson.status === 'OK') {
                                if (resultJson.Data && resultJson.Data.ComponentData && resultJson.Data.ComponentData.length > 0) {
                                    var messages = resultJson.Data.ComponentData;
                                    var messagesContainer = args.originalRequest.componentContainer.getElementsByClassName('messages-container')[0];
                                    for (var i = 0; i < messages.length; i++) {
                                        var messageElement = ComponentInteractor.components[key].createMessageElement(messages[i]);
                                        ElementHelper.prependChildElement({ parentElement: messagesContainer, childElement: messageElement });
                                    }
                                }
                            }
                        }
                    });
                }, 10000);

                this.intervals.push(interval);
            },
            messageInputKeyPressEventHandler: function (e) {
                if (EventHelper.isEnter(e)) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                    var messageInput = container.getElementsByTagName('input')[0];

                    ComponentInteractor.components['messaging'].addMessage({ messageInput: messageInput, componentContainer: container });
                }
            },
            onSignOutEventHandler: function (e) {
                var key = 'messaging';
                while (ComponentInteractor.components[key].intervals.length > 0) {
                    var interval = ComponentInteractor.components[key].intervals.pop();
                    clearInterval(interval);
                }
            },
            Resources: {
                ERROR_SAVING_MESSAGE: 'There was an error saving your message',
                MESSAGE: 'Message'
            }
        },
        winloss: {
            key: 'winloss',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Record';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (request) {
                switch (request.componentType) {
                    case Constants.ComponentType.TASK_ADDON:
                        return this.createItemAddonBodyElement(request);
                    case Constants.ComponentType.TASK_LIST:
                        return this.createItemListBodyElement(request);
                    default:
                        return undefined;
                }
            },
            createItemAddonBodyElement: function (request) {
                var container = document.createElement('div');
                var radioName = 'winlossRadio' + request.itemId;

                var radioWinId = 'win' + request.itemId;
                var radioWin = document.createElement('input');
                radioWin.id = radioWinId;
                radioWin.name = radioName;
                radioWin.type = 'radio';
                radioWin.value = '1';
                radioWin.onclick = this.winlossRadioClickEventHandler;
                radioWin.checked = request.componentData.data && request.componentData.data.State && request.componentData.data.State === 1;
                var radioWinLabel = document.createElement('label');
                radioWinLabel.htmlFor = radioWinId;
                radioWinLabel.innerHTML = this.Resources.WIN;
                
                var radioLossId = 'loss' + request.itemId;
                var radioLoss = document.createElement('input');
                radioLoss.id = radioLossId;
                radioLoss.name = radioName;
                radioLoss.type = 'radio';
                radioLoss.value = '2';
                radioLoss.onclick = this.winlossRadioClickEventHandler;
                radioLoss.checked = request.componentData.data && request.componentData.data.State && request.componentData.data.State === 2;
                var radioLossLabel = document.createElement('label');
                radioLossLabel.htmlFor = radioLossId;
                radioLossLabel.innerHTML = this.Resources.LOSS;

                var radioDrawId = 'draw' + request.itemId;
                var radioDraw = document.createElement('input');
                radioDraw.id = radioDrawId;
                radioDraw.name = radioName;
                radioDraw.type = 'radio';
                radioDraw.value = '3';
                radioDraw.onclick = this.winlossRadioClickEventHandler;
                radioDraw.checked = request.componentData.data && request.componentData.data.State && request.componentData.data.State === 3;
                var radioDrawLabel = document.createElement('label');
                radioDrawLabel.htmlFor = radioDrawId;
                radioDrawLabel.innerHTML = this.Resources.DRAW;

                container.appendChild(radioWin);
                container.appendChild(radioWinLabel);
                container.appendChild(radioLoss);
                container.appendChild(radioLossLabel);
                container.appendChild(radioDraw);
                container.appendChild(radioDrawLabel);

                return container;
            },
            createItemListBodyElement: function (request) {
                var wins = 0, losses = 0, draws = 0;
                for (var i = 0; i < request.componentData.data.length; i++) {
                    switch (request.componentData.data[i].State) {
                        case this.Constants.WIN:
                            wins++;
                            break;

                        case this.Constants.LOSS:
                            losses++;
                            break;

                        case this.Constants.DRAW:
                            draws++;
                            break;
                    }
                }

                var container = document.createElement('div');
                container.className = 'record';
                container.innerHTML = wins + ' - ' + losses + ' - ' + draws;
                return container;
            },
            addOrUpdateComponent: function (request) {
                ElementHelper.addLoadingElement(request.componentContainer, this.Constants.LOADING_WINLOSS_ELEM_ID);

                var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                AjaxHelper.postJsonRequest({
                    url: Config.API_URL + '/tasks/' + itemId + '/components',
                    content: { 
                        ComponentId: componentId,
                        Data: {
                            State: request.state
                        }
                    },
                    callbackArgs: {
                        componentContainer: request.componentContainer
                    },
                    callback: function (response, args) {
                        var key = 'winloss';
                        var resultJson = JSON.parse(response);
                        if (resultJson.status && resultJson.status === 'OK') {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.SAVED,
                                isSuccess: true
                            });
                        } else {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.ERROR,
                                isSuccess: false
                            });
                        }

                        ElementHelper.removeLoadingElement(args.componentContainer, ComponentInteractor.components[key].Constants.LOADING_WINLOSS_ELEM_ID);
                    }
                });
            },
            winlossRadioClickEventHandler: function (e) {
                var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                ComponentInteractor.components['winloss'].addOrUpdateComponent({ state: e.target.value, componentContainer: container });
            },
            Constants: {
                WIN: 1,
                LOSS: 2,
                DRAW: 3,
                LOADING_WINLOSS_ELEM_ID: 'loading_component_winloss'
            },
            Resources: {
                ERROR: 'There was an error saving your record',
                SAVED: 'Record saved!',
                WIN: 'Win',
                LOSS: 'Loss',
                DRAW: 'Draw'
            }
        },
        table: {
            key: 'table',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = request.componentData.data.Name ? request.componentData.data.Name : 'Table';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (request) {
                var container = document.createElement('div');
                if (!request.componentData.data) {
                    var noData = document.createElement('span');
                    noData.innerHTML = this.Resources.NO_TABLE_DATA;
                    container.appendChild(noData);
                } else if (request.componentData.data.Rows && request.componentData.data.Rows.length > 0) {
                    var rows = request.componentData.data.Rows;
                    var table = this.createTableElement(request.componentData.data.Id, rows);
                    container.appendChild(table);
                }
                return container;
            },
            createTableElement: function (tableId, rows) {
                var userSession = UserInteractor.getUserSession();
                var table = document.createElement('table');
                table.setAttribute('table-id', tableId);
                var tableBody = document.createElement('tbody');                    
                var tableRow = document.createElement('tr');
                for (var i = 0; i < rows[0].Cells.length; i++) {
                    var tableHead = document.createElement('th');
                    tableHead.innerHTML = rows[0].Cells[i].Name;
                    tableRow.appendChild(tableHead);
                }
                table.appendChild(tableRow);

                for (var i = 0; i < rows.length; i++) {
                    var tableRow = document.createElement('tr');
                    for (var j = 0; j < rows[i].Cells.length; j++) {
                        var tableCell = document.createElement('td');
                        if (userSession && userSession.UserRole <= Constants.UserRole.ADMIN) {
                            var textbox = document.createElement('input');
                            textbox.type = 'text';
                            textbox.className = 'form-control add-item';
                            textbox.value = rows[i].Cells[j].Value ? rows[i].Cells[j].Value : '';
                            textbox.onkeypress = this.tableCellKeyPressEventHandler;
                            textbox.onblur = this.tableCellBlurEventHandler;
                            textbox.setAttribute('row-id', rows[i].Id);
                            textbox.setAttribute('col-id', rows[i].Cells[j].Id);
                            tableCell.appendChild(textbox);
                        } else {
                            tableCell.innerHTML = rows[i].Cells[j].Value ? rows[i].Cells[j].Value : '&nbsp;';
                        }
                        
                        tableRow.appendChild(tableCell);
                    }
                    tableBody.appendChild(tableRow);
                }

                if (userSession && userSession.UserRole <= Constants.UserRole.ADMIN) {
                    var rowCntInput = document.createElement('input');
                    rowCntInput.value = '1';
                    rowCntInput.type = 'text';
                    rowCntInput.className = 'form-control add-item';
                    var addRowBtn = document.createElement('button');
                    addRowBtn.innerHTML = 'Add Row(s)';
                    addRowBtn.className = 'btn btn-block btn-warning';
                    addRowBtn.setAttribute('table-id', tableId);
                    addRowBtn.onclick = this.addRowBtnClickEventHandler;
                    var tableCell = document.createElement('td');
                    tableCell.setAttribute('colspan', rows[0].Cells.length);
                    tableCell.appendChild(addRowBtn);
                    tableCell.appendChild(rowCntInput);
                    var tableRow = document.createElement('tr');
                    tableRow.appendChild(tableCell);
                    tableBody.appendChild(tableRow);
                }

                table.appendChild(tableBody);

                return table;
            },
            addOrUpdateComponent: function (request) {
                var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                AjaxHelper.postJsonRequest({
                    url: Config.API_URL + '/tasks/' + itemId + '/components',
                    content: { 
                        ComponentId: componentId,
                        Data: request.payload
                    },
                    callbackArgs: {
                        componentContainer: request.componentContainer
                    },
                    callback: function (response, args) {
                        var key = 'table';
                        var resultJson = JSON.parse(response);
                        if (resultJson.status && resultJson.status === 'OK') {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.SAVED,
                                isSuccess: true
                            });
                        } else {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.ERROR,
                                isSuccess: false
                            });
                        }
                    }
                });
            },
            tableCellKeyPressEventHandler: function (e) {
                if (EventHelper.isEnter(e) && e.target.value.trim() !== '' && Number.isInteger(parseInt(e.target.value))) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');

                    ComponentInteractor.components['table'].addOrUpdateComponent({ 
                        componentContainer: container,
                        payload: {
                            Action: "Data",
                            RowId: e.target.getAttribute('row-id'),
                            ColId: e.target.getAttribute('col-id'),
                            Value: parseInt(e.target.value)
                        }
                    });
                }
            },
            tableCellBlurEventHandler: function (e) {
                if (e.target.value.trim() !== '' && Number.isInteger(parseInt(e.target.value))) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                    
                    ComponentInteractor.components['table'].addOrUpdateComponent({
                        componentContainer: container,
                        payload: {
                            Action: "Data",
                            RowId: e.target.getAttribute('row-id'),
                            ColId: e.target.getAttribute('col-id'),
                            Value: parseInt(e.target.value)
                        }
                    });
                }
            },
            addRowBtnClickEventHandler: function (e) {
                if (e.target.nextSibling.value.trim() !== '' && Number.isInteger(parseInt(e.target.nextSibling.value))) {
                    var container = ElementHelper.findParentElementByClassName(e.target, 'component-container');
                    
                    ComponentInteractor.components['table'].addOrUpdateComponent({ 
                        componentContainer: container,
                        payload: {
                            Action: "Rows",
                            TableId: e.target.getAttribute('table-id'),
                            RowCount: parseInt(e.target.nextSibling.value)
                        }
                    });
                }
            },
            Resources: {
                ERROR: 'Error!',
                NO_TABLE_DATA: 'no table data',
                SAVED: 'Saved!'
            }
        },
        chart: {
            key: 'chart',
            chartData: [
            ],
            chartMetaData: [
            ],
            init: function (request) {
                document.addEventListener("onbindcomponentelement", this.onBindComponentElementEventHandler);
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'Chart';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (request) {
                switch (request.componentType) {
                    case Constants.ComponentType.TASK_ADDON:
                        return this.createItemAddonBodyElement(request);
                    case Constants.ComponentType.TASK_LIST:
                        return this.createItemListBodyElement(request);
                }
            },
            createItemAddonBodyElement: function (request) {
            },
            createItemListBodyElement: function (request) {
                // exit if there are no items
                if (request.componentData.data.ChartData.length === 0) return undefined;
                
                var chartDataKey = this.Constants.ITEM_LIST_CHART_KEY + request.itemId;
                
                this.chartData[chartDataKey] = [];

                // get a list of all item ids and create the chart meta data object
                // ids are groups so if we find an existing one, break
                var itemIds = [];
                var chartMetaData = { };
                for (var i = 0; i < request.componentData.data.ChartData.length; i ++) {
                    if (itemIds.indexOf(request.componentData.data.ChartData[i].TaskId) < 0) {
                        itemIds.push(request.componentData.data.ChartData[i].TaskId);
                        // populate meta data with this item
                        chartMetaData['yValue' + (i + 1).toString()] = {
                            color: request.componentData.data.ChartData[i].ChartColor,
                            name: request.componentData.data.ChartData[i].ChartAlias
                        };
                    } else {
                        break;
                    }
                }

                chartMetaData['itemCount'] = itemIds.length;
                chartMetaData['xAxisColNum'] = request.componentData.data.ChartData[0].XAxisColNum;
                chartMetaData['yAxisColNum'] = request.componentData.data.ChartData[0].YAxisColNum;
                
                if (request.componentData.data.ChartData[0].XAxisName) {
                    chartMetaData['xAxisName'] = request.componentData.data.ChartData[0].XAxisName;
                }
                
                if (request.componentData.data.ChartData[0].YAxisName) {
                    chartMetaData['yAxisName'] = request.componentData.data.ChartData[0].YAxisName;
                }

                this.chartMetaData[chartDataKey] = chartMetaData;

                var currentRow = 1;
                var chartDataItem = { };
                for (var i = 0; i < request.componentData.data.ChartData.length; i++) {
                    if (request.componentData.data.ChartData[i].RowOrder !== currentRow) {
                        currentRow = request.componentData.data.ChartData[i].RowOrder;
                        this.chartData[chartDataKey].push(chartDataItem);
                        chartDataItem = { };
                    }

                    if (request.componentData.data.ChartData[i].ColOrder === this.chartMetaData[chartDataKey].xAxisColNum) {
                        chartDataItem['xValue'] = request.componentData.data.ChartData[i].Value;
                    } else if (request.componentData.data.ChartData[i].ColOrder === this.chartMetaData[chartDataKey].yAxisColNum) {
                        var yValueNum = 0;
                        for (var j = 0; j < itemIds.length; j++) {
                            if (itemIds[j] === request.componentData.data.ChartData[i].TaskId) {
                                yValueNum = j + 1;
                                break;
                            }
                        }

                        chartDataItem['yValue' + yValueNum] = request.componentData.data.ChartData[i].Value ? request.componentData.data.ChartData[i].Value : 0;
                    }
                }

                this.chartData[chartDataKey].push(chartDataItem);

                var container = document.createElement('div');
                container.className = Constants.CssClass.ITEM_LIST_COMPONENT;
                EventHelper.resizeEventHandlers[chartDataKey] = { };
                EventHelper.resizeEventHandlers[chartDataKey].handler = this.drawChart;
                EventHelper.resizeEventHandlers[chartDataKey].args = { 
                    container: container,
                    chartData: this.chartData[chartDataKey],
                    chartMetaData: this.chartMetaData[chartDataKey]
                };

                return container;
            },
            addOrUpdateComponent: function (request) {
                var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                AjaxHelper.postJsonRequest({
                    url: Config.API_URL + '/tasks/' + itemId + '/components',
                    content: { 
                        ComponentId: componentId,
                        Data: request.payload
                    },
                    callbackArgs: {
                        componentContainer: request.componentContainer
                    },
                    callback: function (response, args) {
                        var key = 'chart';
                        var resultJson = JSON.parse(response);
                        if (resultJson.status && resultJson.status === 'OK') {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.SAVED,
                                isSuccess: true
                            });
                        } else {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.ERROR,
                                isSuccess: false
                            });
                        }
                    }
                });
            },
            drawChart: function (e, args) {
                ElementHelper.clearChildElements({ parentElement: args.container });

                // set the dimensions and margins of the graph
                var margin = {top: 20, right: 20, bottom: 70, left: 50},
                    width = args.container.clientWidth - margin.left - margin.right - 30,
                    height = 500 - margin.top - margin.bottom;

                // append the svg obgect to the body of the page
                // appends a 'group' element to 'svg'
                // moves the 'group' element to the top left margin
                var svg = d3.select(args.container).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var data = args.chartData;

                // format the data
                data.forEach(function(d) {
                    d.xValue = d.xValue.toString();
                    for (var i = 1; d.hasOwnProperty('yValue' + i); i++) {
                        d['yValue' + i] = +d['yValue' + i];
                    }
                });
                
                // set the ranges
                var x = d3.scaleLinear().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);

                // Scale the range of the data
                x.domain([d3.min(data, function(d) { return d.xValue; }), d3.max(data, function(d) { return d.xValue; })]);
                y.domain([0, d3.max(data, function(d) { 
                    var arr = [];
                    for (var i = 1; d.hasOwnProperty('yValue' + i); i++) {
                        arr.push(d['yValue' + i]);
                    }
                    return Math.max.apply(null, arr); //return Math.max(...arr);
                })]);

                var valuelines = function (yValueNum) {
                    return d3.line()
                        .x(function(d) { return x(d.xValue); })
                        .y(function(d) { return y(d['yValue' + yValueNum]); });
                }

                // Add the valueline path.
                var legendSpace = width / args.chartMetaData.itemCount;                
                for (var i = 1; args.chartMetaData.hasOwnProperty('yValue' + i); i++) {
                    svg.append("path")
                        .data([data])
                        .attr("class", "line")
                        .style("stroke", args.chartMetaData['yValue' + i].color)
                        .attr("id", 'tag'+i) // assign ID
                        .attr("d", valuelines(i));
                        
                    // Add the Legend
                    svg.append("text")
                        .attr("x", (legendSpace/3) + ((i - 1) * legendSpace))  // space legend
                        .attr("y", height + margin.bottom - 5)
                        .attr("class", "legend")    // style the legend
                        .style("fill", args.chartMetaData['yValue' + i].color)
                        // .on("click", function () {
                        //     // Determine if current line is visible 
                        //     var active   = d.active ? false : true,
                        //     newOpacity = active ? 0 : 1; 
                        //     // Hide or show the elements based on the ID
                        //     d3.select("#tag"+i)
                        //         .transition().duration(100) 
                        //         .style("opacity", newOpacity); 
                        //     // Update whether or not the elements are active
                        //     d.active = active;
                        // })
                        .text(args.chartMetaData['yValue' + i].name);
                }

                // Add the X Axis
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .attr("class", "axis")
                    .call(d3.axisBottom(x).ticks(2));

                // Add the Y Axis
                svg.append("g")
                    .attr("class", "axis")
                    .call(d3.axisLeft(y));

                // text label for the x axis
                if (args.chartMetaData.xAxisName) {
                    svg.append("text")             
                        .attr("transform", "translate(" + (width/2) + " ," + 
                            (height + margin.top + 20) + ")")
                        .attr("class", "axis")
                        .style("text-anchor", "middle")
                        .text(args.chartMetaData.xAxisName);
                }
                    
                // text label for the y axis
                if (args.chartMetaData.yAxisName) {
                    svg.append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 0 - margin.left)
                        .attr("x",0 - (height / 2))
                        .attr("dy", "1em")
                        .style("text-anchor", "middle")
                        .attr("class", "axis")
                        .text(args.chartMetaData.yAxisName);
                }
            },
            onBindComponentElementEventHandler: function (e) {
                if (e.detail.key === 'chart' && e.detail.bindType === Constants.ComponentType.TASK_LIST) {
                    var self = ComponentInteractor.components.chart;
                    self.drawChart(e, {
                        container: e.detail.componentElement.getElementsByClassName(Constants.CssClass.ITEM_LIST_COMPONENT)[0],
                        chartData: self.chartData[self.Constants.ITEM_LIST_CHART_KEY + e.detail.itemId],
                        chartMetaData: self.chartMetaData[self.Constants.ITEM_LIST_CHART_KEY + e.detail.itemId]
                    });
                }
            },
            Constants: {
                ITEM_LIST_CHART_KEY: 'component-itemlist-chart-'
            },
            Resources: {
                ERROR: 'Error!',
                SAVED: 'Saved!'
            }
        },
        component: {
            key: 'component',
            init: function (request) {
            },
            createComponentElement: function (request) {
                var headerText = document.createElement('span');
                headerText.innerHTML = 'My Component';
                return BaseComponentInteractor.createComponentElement({
                    key: this.key,
                    itemId: request.itemId,
                    componentData: request.componentData,
                    componentType: request.componentType,
                    headerTextElement: headerText,
                    bodyElement: this.createBodyElement(request)
                });
            },
            createBodyElement: function (request) {
                switch (request.componentType) {
                    case Constants.ComponentType.TASK_ADDON:
                        return this.createItemAddonBodyElement(request);
                    case Constants.ComponentType.TASK_LIST:
                        return this.createItemListBodyElement(request);
                }
            },
            createItemAddonBodyElement: function (request) {
                var container = document.createElement('div');
                container.innerHTML = 'Component Body';
                return container;
            },
            createItemListBodyElement: function (request) {
            },
            addOrUpdateComponent: function (request) {
                var itemId = request.componentContainer.getAttribute(Constants.TASK_ID_ATTRIBUTE);
                var componentId = request.componentContainer.getAttribute(Constants.COMPONENT_ID_ATTRIBUTE);
                AjaxHelper.postJsonRequest({
                    url: Config.API_URL + '/tasks/' + itemId + '/components',
                    content: { 
                        ComponentId: componentId,
                        Data: request.payload
                    },
                    callbackArgs: {
                        componentContainer: request.componentContainer
                    },
                    callback: function (response, args) {
                        var key = 'component';
                        var resultJson = JSON.parse(response);
                        if (resultJson.status && resultJson.status === 'OK') {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.SAVED,
                                isSuccess: true
                            });
                        } else {
                            BaseComponentInteractor.displayRequestActionResultMessage({
                                parentElement: args.componentContainer.getElementsByClassName(Constants.CssClass.COMPONENT_HEADER)[0],
                                message: ComponentInteractor.components[key].Resources.ERROR,
                                isSuccess: false
                            });
                        }
                    }
                });
            },
            Resources: {
                ERROR: 'Error!',
                SAVED: 'Saved!'
            }
        }
    }
};

NavBarInteractor = {
    loadView: function (request) {
        // init event handlers
        document.addEventListener("onsignin", this.onSignInEventHandler);
        document.addEventListener("onsignout", this.onSignOutEventHandler);

        var root = this.createRootElement();
        request.parent.appendChild(root);
    },

    createRootElement: function () {
        var toggleNavElement = this.createToggleNavElement();
        var navBrandElement = this.createNavBrandElement();
        var beta = document.createElement('sup');
        beta.className = 'navbar-brand beta';
        beta.innerHTML = 'BETA';
        var navHeader = document.createElement('div');
        navHeader.className = 'navbar-header';
        navHeader.appendChild(toggleNavElement);
        navHeader.appendChild(navBrandElement);
        // navHeader.appendChild(beta);
        var nav = this.createNavBarElement();
        var navWrapper = document.createElement('div');
        navWrapper.className = 'container-fluid';
        navWrapper.appendChild(navHeader);
        navWrapper.appendChild(nav);
        var nav = document.createElement('div');
        nav.className = 'navbar navbar-inverse navbar-fixed-top';
        nav.appendChild(navWrapper);
        return nav;
    },

    createToggleNavElement: function () {
        var toggleNav = document.createElement('span');
        toggleNav.className = 'sr-only';
        toggleNav.innerHTML = 'Toggle navigation';
        var iconBar1 = document.createElement('span');
        iconBar1.className = 'icon-bar';
        var iconBar2 = document.createElement('span');
        iconBar2.className = 'icon-bar';
        var iconBar3 = document.createElement('span');
        iconBar3.className = 'icon-bar';
        var toggleNavButton = document.createElement('button');
        toggleNavButton.className = 'navbar-toggle collapsed';
        toggleNavButton.type = 'button';
        toggleNavButton.setAttribute('data-toggle', 'collapse');
        toggleNavButton.setAttribute('data-target', '#navbar');
        toggleNavButton.setAttribute('aria-expanded', 'false');
        toggleNavButton.setAttribute('aria-controls', 'navbar');
        toggleNavButton.appendChild(toggleNav);
        toggleNavButton.appendChild(iconBar1);
        toggleNavButton.appendChild(iconBar2);
        toggleNavButton.appendChild(iconBar3);
        return toggleNavButton;
    },

    createNavBrandElement: function () {
        // var navBrandLogo = document.createElement('img');
        // navBrandLogo.src = 'assets/logo-nav.png';
        // navBrandLogo.style.height = '22px';
        // var navBrandName = document.createElement('span');
        // navBrandName.innerHTML = 'Cazzie';
        // var beta = document.createElement('sup');
        // beta.className = 'beta';
        // beta.innerHTML = 'BETA';
        var navBrandName = document.createElement('p');
        var wazo = document.createElement('span');
        var mill = document.createElement('span');
        wazo.innerHTML = 'WAZO';
        wazo.style.color = '#dddddd';
        mill.innerHTML = 'MILL';
        mill.style.color = '#fed136';
        var navBrand = document.createElement('span');
        navBrand.className = 'navbar-brand';
        navBrand.appendChild(wazo);
        navBrand.appendChild(mill);
        // navBrand.appendChild(navBrandLogo);
        return navBrand;
    },

    createNavBarElement: function () {
        var navbar = document.createElement('div');
        navbar.id = Constants.NAVBAR_ELEM_ID;
        navbar.className = 'collapse navbar-collapse';
        var user = UserInteractor.getUserSession();
        if (user && !document.getElementById(Constants.SIGN_OUT_ELEM_ID)) {
            var signOutElement = this.createSignOutElement(user);
            navbar.appendChild(signOutElement);
        }
        return navbar;
    },

    createSignOutElement: function (user) {
        var closeButtonText = document.createElement('span');
        closeButtonText.innerHTML = '&times;';
        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.title = Resources.SIGN_OUT;
        closeButton.className = 'close';
        closeButton.onclick = this.signOutClickEventHandler;
        closeButton.appendChild(closeButtonText);
        var navbarRight = document.createElement('div');
        navbarRight.id = Constants.SIGN_OUT_ELEM_ID;
        navbarRight.className = 'nav navbar-nav navbar-right';
        navbarRight.appendChild(closeButton);
        return navbarRight;
    },

    /*
     * Event Handlers
     */

    signOutClickEventHandler: function(e) {
        UserInteractor.expireUserSession();
    },

    onSignInEventHandler: function() {
        var user = UserInteractor.getUserSession();
        var signOutElement = NavBarInteractor.createSignOutElement(user);
        ElementHelper.appendChildElement({ parentElementId: Constants.NAVBAR_ELEM_ID, childElement: signOutElement });
    },
    
    onSignOutEventHandler: function() {
        ElementHelper.removeChildElement({ parentElementId: Constants.NAVBAR_ELEM_ID, childElementId: Constants.SIGN_OUT_ELEM_ID });
    }
};

AssociationInteractor = {
    currentAssociationId: 0,

    init: function() {
        document.addEventListener("onsignin", this.onSignInEventHandler);
        document.addEventListener("onsignout", this.onSignOutEventHandler);
    },

    loadGlobalStyles: function () {
        document.body.style.paddingTop = '50px';
    },

    loadView: function (request) {
        this.getAssociationsRequest(request);
    },

    getAssociationsRequest: function(request) {
        ElementHelper.addLoadingElement(request.parent, Constants.LOADING_ROOT_ELEM_ID);


        var path = UrlHelper.routes.has(Constants.ASSOCIATION_KEY_ATTRIBUTE) ? '/associations/' + UrlHelper.routes.get(Constants.ASSOCIATION_KEY_ATTRIBUTE) : '/associations';
        var url = Config.API_URL + path;

        AjaxHelper.getJsonRequest({
            url: url,
            callback: this.getAssociationsRequestCallback,
            callbackArgs: request
        });
    },

    getAssociationsRequestCallback: function (response, args) {
        ElementHelper.removeLoadingElement(args.parent, Constants.LOADING_ROOT_ELEM_ID);

        var resultJson = JSON.parse(response);
        if (resultJson) {
            if (resultJson && resultJson.status && resultJson.status === 401) {
                UserInteractor.authenticateUser();
            } else if (resultJson.status && resultJson.status !== 200) {
                UserInteractor.expireUserSession();
            } else {
                if (Array.isArray(resultJson)) {
                    args.associations = resultJson;
                } else {
                    args.association = resultJson;
                }
                
                AssociationInteractor.loadAssociations(args);
            }
        } else {
            alert(Resources.INVALID_PAGE);
        }
    },

    loadAssociations: function (args) {
        this.loadGlobalStyles();

        var associationView = document.getElementById(Constants.ASSOCIATION_VIEW_ELEM_ID);
        if (associationView) {
            ElementHelper.removeChildElement({ parentElement: associationView.parentElement, childElement: associationView });
        }

        var container = document.createElement('div');
        container.id = Constants.ASSOCIATION_VIEW_ELEM_ID;
        args.parent.appendChild(container);

        var associationElement;
        if (args.associations) {
            associationElement = this.createAssociationListElement(args.associations);
            this.currentAssociationId = args.associations[0].Id;
        } else {
            associationElement = this.createAssociationElement(args.association);
            this.currentAssociationId = args.association.Id;
        }

        var contentElement = this.createAssociationContentElement();

        container.appendChild(associationElement);
        container.appendChild(contentElement);

        document.dispatchEvent(new CustomEvent("onloadassociation", { detail: { associationId: this.currentAssociationId } }));
    },

    createAssociationListElement: function (associations) {
        var associationsList = document.createElement('select');
        associationsList.id = Constants.ASSOCIATION_LIST_ELEM_ID;
        associationsList.className = 'form-control associations-list';
        ElementHelper.clearSelectOptions({ parentElement: associationsList });
        for (var i = 0; i < associations.length; i++) {
            var option = document.createElement('option');
            option.text  = associations[i].Name;
            option.value = associations[i].Id;
            associationsList.add(option);
        }
        var currentAssociationId = document.createElement('input');
        currentAssociationId.id = Constants.CURRENT_ASSOCIATION_ID_ELEM_ID;
        currentAssociationId.type = 'hidden';
        currentAssociationId.value = '0';
        var associationListContainer = document.createElement('div');
        associationListContainer.id = Constants.ASSOCIATION_LIST_CONTAINER_ELEM_ID;
        associationListContainer.className = 'container-fluid associations-container';
        associationListContainer.appendChild(associationsList);
        associationListContainer.appendChild(currentAssociationId);
        return associationListContainer;
    },

    createAssociationElement: function (association) {
        var associationElement = document.createElement('div');
        associationElement.className = 'association-item';
        associationElement.innerHTML = association.Name;
        var associationListContainer = document.createElement('div');
        associationListContainer.id = Constants.ASSOCIATION_LIST_CONTAINER_ELEM_ID;
        associationListContainer.className = 'container-fluid associations-container';
        associationListContainer.appendChild(associationElement);
        return associationListContainer;
    },

    createAssociationContentElement: function () {
        var contentWrapper = document.createElement('div');
        contentWrapper.id = Constants.ASSOCIATION_CONTENT_CONTAINER_ELEM_ID;
        contentWrapper.className = 'row';
        contentWrapper.appendChild(this.createDirectoriesContainer());
        contentWrapper.appendChild(this.createItemsContainer());
        var container = document.createElement('div');
        container.className = 'container-fluid';
        container.appendChild(contentWrapper);
        return container;
    },

    createDirectoriesContainer: function() {
        var directoryListContainer = document.createElement('ul');
        directoryListContainer.id = Constants.DIRECTORIES_CONTAINER_ELEM_ID;
        directoryListContainer.className = 'nav nav-pills flex-column';
        var header = document.createElement('div');
        header.className = 'nav-header';
        header.innerHTML = Resources.FOLDERS_HEADER;
        var container = document.createElement('nav');
        container.className = 'col-sm-3 col-md-2 sidebar';
        container.appendChild(header);
        container.appendChild(directoryListContainer);
        return container;
    },

    createItemsContainer: function() {
        var itemsContainer = document.createElement('div');
        itemsContainer.id = Constants.TASK_CONTAINER_ELEM_ID;
        itemsContainer.className = 'items-container';
        var container = document.createElement('main');
        container.className = 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main';
        container.appendChild(itemsContainer);
        return container;
    },

    /*
     * Event Handlers
     */

    onSignInEventHandler: function(e) {
        var root = document.getElementById('root');
        AssociationInteractor.getAssociationsRequest({ parent: root });
    },

    onSignOutEventHandler: function (e) {
        var associationView = document.getElementById(Constants.ASSOCIATION_VIEW_ELEM_ID);
        if (associationView) {
            ElementHelper.removeChildElement({ parentElement: associationView.parentElement, childElement: associationView });
        }
    }
};

DirectoryInteractor = {
    currentDirectoryId: 0,

    init: function() {
        document.addEventListener("onloadassociation", this.onLoadAssociationEventHandler);
    },
    
    getDirectoriesRequest: function(request) {
        ElementHelper.addLoadingElement(request.parent, Constants.LOADING_DIRECTORIES_ELEM_ID);

        ElementHelper.appendChildElement({
            parentElement: request.parent,
            childElementType: 'li', 
            childElementText: Resources.LOADING_DIRECTORIES
        });

        AjaxHelper.getJsonRequest({
            url: Config.API_URL + '/associations/' + request.associationId + '/directories',
            callback: this.getDirectoriesRequestCallback
        });
    },
    
    getDirectoriesRequestCallback: function (response) {
        var directoriesContainer = document.getElementById(Constants.DIRECTORIES_CONTAINER_ELEM_ID);
        ElementHelper.clearChildElements({ parentElement: directoriesContainer });

        var resultJson = JSON.parse(response);
        if (resultJson.status && resultJson.status !== 200) {
            ElementHelper.appendChildElement({ parentElement: directoriesContainer, childElementType: 'li', childElementText: Resources.ERROR_LOADING_DIRECTORIES });
        } else {
            DirectoryInteractor.loadDirectories({ parentElement: directoriesContainer, directories: resultJson });
        }
    },
    
    loadDirectories: function(args) {
        for (var i = 0; i < args.directories.length; i++) {
            ElementHelper.appendHyperlinkedChildElement({
                parentElement: args.parentElement, 
                childElementType: 'li', 
                childElementText: args.directories[i].Name, 
                childElementClass: 'nav-item',
                linkElementClass: 'nav-link' + ((i === 0) ? ' active' : ''),
                link: ""
            });
        }

        this.currentDirectoryId = args.directories[0].Id;
        document.dispatchEvent(new CustomEvent("onloaddirectory", { detail: { directoryId: this.currentDirectoryId } }));
    },

    /*
     * Event Handlers
     */

     onLoadAssociationEventHandler: function (e) {
         DirectoryInteractor.getDirectoriesRequest({
             parent: document.getElementById(Constants.DIRECTORIES_CONTAINER_ELEM_ID),
             associationId: e.detail.associationId
         });
     }
};

ItemInteractor = {
    init: function() {
        document.addEventListener("onloaddirectory", this.onLoadDirectoryEventHandler);
    },

    getItemsRequest: function(request) {
        ElementHelper.addLoadingElement(document.getElementById(Constants.TASK_CONTAINER_ELEM_ID).parentElement, Constants.LOADING_TASKS_LIST_ELEM_ID);

        AjaxHelper.getJsonRequest({
            url: Config.API_URL + '/directories/' + request.directoryId + '/tasks',
            callback: this.getItemsRequestCallback,
            callbackArgs: {
                directoryId: request.directoryId
            }
        });
    },

    getItemsRequestCallback: function(response, args) {
        var itemsContainer = document.getElementById(Constants.TASK_CONTAINER_ELEM_ID);
        ElementHelper.removeLoadingElement(itemsContainer.parentElement, Constants.LOADING_TASKS_LIST_ELEM_ID);
        
        var resultJson = JSON.parse(response);

        ItemInteractor.loadItems({ 
            directoryId: args.directoryId,
            parentElement: itemsContainer, 
            items: resultJson.status && resultJson.status !== 200  ? undefined : resultJson
        });
    },
    
    addItemRequest: function(request) {
        if (this.validateItemInput(request.addItemElem)) {
            var itemGuid = GenericHelper.newGuid();
            this.addUnconfirmedItem(Constants.TASK_CONTAINER_ELEM_ID, request.addItemElem.value, itemGuid);
            
            AjaxHelper.postJsonRequest({
                url: Config.API_URL + '/tasks',
                content: { 
                    Name: request.addItemElem.value, 
                    DirectoryId: parseInt(request.addItemElem.getAttribute(Constants.DIRECTORY_ID_ATTRIBUTE)) 
                },
                callback: this.addItemRequestCallback,
                callbackArgs: {
                    itemGuid: itemGuid,
                    parentElement: document.getElementById(Constants.TASK_CONTAINER_ELEM_ID)
                }
            });
        }
    },

    addItemRequestCallback: function (response, args) {
        var resultJson = JSON.parse(response);

        if (resultJson.status && resultJson.status !== 200) {
            var textElem = document.getElementById(args.itemGuid).getElementsByTagName('span')[0];
            textElem.innerHTML = Resources.ERROR_ADDING_ITEM;
            textElem.className = 'red';
        } else {
            ItemInteractor.loadItem({ parentElement: args.parentElement, item: resultJson, loadComponents: true, replaceItemId: args.itemGuid });
            document.getElementsByClassName('add-item')[0].value = '';
        }
    },
    
    loadItemComponentsRequest: function (args) {
        AjaxHelper.getJsonRequest({
            url: Config.API_URL + '/tasks/' + args.itemId + '/components',
            callback: this.loadItemComponentsRequestCallback,
            callbackArgs: { directoryId: args.directoryId, itemElement: args.itemElement }
        });
    },

    loadItemComponentsRequestCallback: function (response, args) {
        var resultJson = JSON.parse(response);
        
        var componentsContainer = document.createElement('div');
        componentsContainer.id = Constants.TASK_COMPONENTS_CONTAINER_ELEM_ID_PREFIX + resultJson.Data.TaskId;
        args.itemElement.parentElement.insertBefore(componentsContainer, args.itemElement.nextSibling);

        if (resultJson.Data.ComponentsData.length > 0) {
            for (var i = 0; i < resultJson.Data.ComponentsData.length; i++) {
                if (ComponentInteractor.components[resultJson.Data.ComponentsData[i].key]) {
                    var componentElement = ComponentInteractor.components[resultJson.Data.ComponentsData[i].key].createComponentElement({
                        itemId: resultJson.Data.TaskId,
                        componentData: resultJson.Data.ComponentsData[i],
                        componentType: Constants.ComponentType.TASK_ADDON
                    });
                    
                    if (componentElement) {
                        componentsContainer.appendChild(componentElement);
                        // ComponentInteractor.components[resultJson.Data.ComponentsData[i].key].init({ componentElement: componentElement }); // maybe make this a custom event
                    }
                }
            }
            
            args.itemElement.setAttribute(Constants.COMPONENTS_LOADED_ATTRIBUTE, 'true');
            args.itemElement.classList.add(Constants.CssClass.COMPONENTS_EXPANDED);

            var toggleElement = args.itemElement.getElementsByClassName('fa-chevron-down')[0];
            toggleElement.className = toggleElement.className.replace('chevron-down', 'chevron-up');
        }
    },

    updateItemRequest: function (request) {
        if (this.validateItemInput(request.updateItemElem)) {
            // alert(request.updateItemElem.value);
            var itemGuid = GenericHelper.newGuid();
            // this.addUnconfirmedItem(Constants.TASK_CONTAINER_ELEM_ID, request.addItemElem.value, itemGuid);

            // AjaxHelper.putJsonRequest({
            //     url: Config.API_URL + '/tasks',
            //     content: { 
            //         Name: request.updateItemElem.value, 
            //         DirectoryId: parseInt(request.updateItemElem.getAttribute(Constants.DIRECTORY_ID_ATTRIBUTE)) 
            //     },
            //     callback: this.addItemRequestCallback,
            //     callbackArgs: {
            //         itemGuid: itemGuid,
            //         parentElement: document.getElementById(Constants.TASK_CONTAINER_ELEM_ID)
            //     }
            // });
        }
    },

    loadItems: function(args) {
        ElementHelper.clearChildElements({ parentElement: args.parentElement });

        if (!args.items) {
            this.addItemsContainerMessage({
                parentElement: args.parentElement,
                message: Resources.ERROR_LOADING_GAMES
            });
        } else {
            // ITEM LIST COMPONENTS

            var newItemElement = this.createNewItemElement({ directoryId: args.directoryId, parentElement: args.parentElement.parentElement, maxLength: Constants.ADD_TASK_MAX_LENGTH });
            var itemListComponentsContainer = document.createElement('div');
            args.parentElement.parentElement.insertBefore(itemListComponentsContainer, args.parentElement.parentElement.firstChild);

            if (newItemElement) {
                args.parentElement.parentElement.insertBefore(newItemElement, itemListComponentsContainer);
            }

            this.loadItemListComponentsRequest({
                directoryId: args.directoryId,
                containerElement: itemListComponentsContainer
            });

            // ITEMS

            if (args.items.length > 0) {
                for (var i = 0; i < args.items.length; i++ ) {
                    var loadComponents = i === 0; // var loadComponents = i === args.items.length - 1;
                    this.loadItem({ parentElement: args.parentElement, item: args.items[i], loadComponents: loadComponents });
                }
            } else {
                this.addItemsContainerMessage({
                    parentElement: args.parentElement,
                    id: Constants.NO_TASKS_ELEM_ID, 
                    message: Resources.NO_GAMES_TO_LOAD
                });
            }
        }
    },

    loadItem: function(args) {
        var actions = document.createElement('div');
        actions.className = 'item-action col-xs-1';
        if (UserInteractor.getUserSession()) {
            var editElement = ElementHelper.createIconElement('pencil');
            editElement.onclick = this.onUpdateItemClickEventHandler;
            actions.appendChild(editElement);
        }
        var toggleComponentsElement = ElementHelper.createIconElement('chevron-down');
        toggleComponentsElement.onclick = this.toggleComponentsEventHandler;
        toggleComponentsElement.setAttribute(Constants.TASK_ID_ATTRIBUTE, args.item.Id);
        toggleComponentsElement.setAttribute(Constants.DIRECTORY_ID_ATTRIBUTE, args.item.DirectoryId);
        actions.appendChild(toggleComponentsElement);
        var itemText = document.createElement('span');
        itemText.className = 'item-text';
        itemText.innerHTML = args.item.Name;
        itemText.ondblclick = this.onUpdateItemDblClickEventHandler;
        itemText.setAttribute(Constants.TASK_ID_ATTRIBUTE, args.item.Id);
        var itemTextContainer = document.createElement('div');
        itemTextContainer.className = 'col-xs-11';
        itemTextContainer.appendChild(itemText);
        var wrapper = document.createElement('div');
        wrapper.className = 'row';
        wrapper.appendChild(itemTextContainer);
        wrapper.appendChild(actions);
        var container = document.createElement('div');
        container.className = 'item'; // ' components-expanded'
        container.setAttribute(Constants.COMPONENTS_LOADED_ATTRIBUTE, 'false');
        container.appendChild(wrapper);
        
        if (args.replaceItemId) {
            ElementHelper.replaceChildElement({
                newElement: container,
                childElementId: args.replaceItemId,
                parentElement: args.parentElement
            });
        } else {
            args.parentElement.appendChild(container);
        }

        if (args.loadComponents) {
            this.loadItemComponentsRequest({ itemId: args.item.Id, directoryId: args.item.DirectoryId, itemElement: container });
        }
    },

    createNewItemElement: function (args) {
        var userSession = UserInteractor.getUserSession();
        if (userSession && userSession.UserRole <= Constants.UserRole.ADMIN) {
            var input = document.createElement('input');
            input.type = 'text';
            input.className = 'form-control add-item';
            input.placeholder = Resources.NEW_GAME;
            input.setAttribute(Constants.DIRECTORY_ID_ATTRIBUTE, args.directoryId);
            input.onkeypress = this.onAddItemKeyPressEventHandler;
            if (args.maxLength) {
                input.maxLength = args.maxLength.toString();
            }
            return input;
        }
    },

    addItemsContainerMessage: function (args) {
        ElementHelper.appendChildElement({
            parentElement: args.parentElement, 
            childElementId: args.id ? args.id : '',
            childElementType: 'div', 
            childElementText: args.message, 
            childElementClass: Constants.CssClass.TASK_LIST_MESSAGE
        });
    },

    addUnconfirmedItem: function (parentElementId, text, guid) {
        var itemText = document.createElement('span');
        itemText.innerHTML = text;
        var container = document.createElement('div');
        container.id = guid;
        container.className = 'item unconfirmed';
        container.appendChild(itemText);
        ElementHelper.prependChildElement({ parentElementId: parentElementId, childElement: container });
    },

    updateItem: function (itemId, itemText, itemElement) {
        var parser = new DOMParser;
        var dom = parser.parseFromString('<!doctype html><body>' + itemText, 'text/html');

        ElementHelper.cancelActiveElements();

        var updateItemElement = createTextInputElement({
            elementId: Constants.EDIT_TASK_ELEM_ID_PREFIX + itemId,
            elementClass: 'form-control item update',
            elementValue: dom.body.textContent,
            elementAttributes: [ [Constants.TASK_ID_ATTRIBUTE, itemId] ]
        });

        itemElement.style.display = 'none';
        itemElement.parentElement.insertBefore(updateItemElement, itemElement);
        updateItemElement.onkeypress = this.onUpdateItemKeyPressEventHandler;
        updateItemElement.focus();

        if (itemElement.className.indexOf(Constants.CssClass.COMPONENTS_EXPANDED) >= 0) {
            updateItemElement.classList.add(Constants.CssClass.COMPONENTS_EXPANDED);
        }

        ElementHelper.cancelActiveElementDelegates.push(function () {
            ElementHelper.removeChildElement({
                parentElement: updateItemElement.parentElement,
                childElement: updateItemElement
            });

            itemElement.style.display = '';
        });
    },

    toggleComponentsEventHandler: function(e) {
        var itemId = e.target.getAttribute(Constants.TASK_ID_ATTRIBUTE);
        var directoryId = e.target.getAttribute(Constants.DIRECTORY_ID_ATTRIBUTE);
        var itemElement = ElementHelper.findParentElementByClassName(e.target, 'item');
        var isComponentsLoaded = itemElement.getAttribute(Constants.COMPONENTS_LOADED_ATTRIBUTE);
        if (isComponentsLoaded == 'true') {
            var componentsContainer = itemElement.nextSibling;
            if (componentsContainer.style.display === '') {
                componentsContainer.style.display = 'none';
                e.target.className = e.target.className.replace('chevron-up', 'chevron-down');
                itemElement.classList.remove(Constants.CssClass.COMPONENTS_EXPANDED);
            } else {
                componentsContainer.style.display = '';
                e.target.className = e.target.className.replace('chevron-down', 'chevron-up');
                itemElement.classList.add(Constants.CssClass.COMPONENTS_EXPANDED);
            }
        } else {
            ItemInteractor.loadItemComponentsRequest({ itemId: itemId, directoryId: directoryId, itemElement: itemElement });
        }
    },

    loadItemListComponentsRequest: function (args) {
        AjaxHelper.getJsonRequest({
            // TODO: change API to use dataType param for task list component data
            // url: Config.API_URL + '/tasks/' + args.itemId + '/components?dataType=' + Constants.ContentType.TASKS_LIST,
            url: Config.API_URL + '/directories/' + args.directoryId + '/components',
            callback: this.loadItemListComponentsRequestCallback,
            callbackArgs: { directoryId: args.directoryId, containerElement: args.containerElement }
        });
    },

    loadItemListComponentsRequestCallback: function (response, args) {
        var resultJson = JSON.parse(response);

        for (var i = 0; i < resultJson.Components.ComponentsData.length; i++) {
            if (ComponentInteractor.components[resultJson.Components.ComponentsData[i].key]) {
                var componentElement = ComponentInteractor.components[resultJson.Components.ComponentsData[i].key].createComponentElement({
                    itemId: resultJson.Components.DirectoryId,
                    componentData: resultJson.Components.ComponentsData[i],
                    componentType: Constants.ComponentType.TASK_LIST
                });
                
                if (componentElement) {
                    args.containerElement.appendChild(componentElement);

                    document.dispatchEvent(new CustomEvent("onbindcomponentelement", { 
                        detail: { 
                            componentElement: componentElement,
                            itemId: resultJson.Components.DirectoryId,
                            bindType: Constants.ComponentType.TASK_LIST,
                            key: resultJson.Components.ComponentsData[i].key,
                            componentData: resultJson.Components.ComponentData
                        } 
                    }));
                }
            }
        }
    },
    
    /*
     * Validation
     */

    validateItemInput: function (input) {
        return input.value.trim() !== '';
    },

    /*
     * Event Handlers
     */

    onLoadDirectoryEventHandler: function (e) {
        ItemInteractor.getItemsRequest({
            parent: document.getElementById(Constants.DIRECTORIES_CONTAINER_ELEM_ID),
            directoryId: e.detail.directoryId
        });
    },

    onAddItemKeyPressEventHandler: function (e) {
        if (EventHelper.isEnter(e)) {
            ItemInteractor.addItemRequest({ addItemElem: e.target });
        }
    },

    onUpdateItemClickEventHandler: function(e) {
        var itemTextElement = e.target.parentElement.parentElement.getElementsByClassName('item-text')[0];
        var itemId = itemTextElement.getAttribute(Constants.TASK_ID_ATTRIBUTE);
        var itemText = itemTextElement.innerHTML;
        
        ItemInteractor.updateItem(itemId, itemText, ElementHelper.findParentElementByClassName(itemTextElement, 'item'));
    },

    onUpdateItemDblClickEventHandler: function(e) {
        var itemId = e.target.getAttribute(Constants.TASK_ID_ATTRIBUTE);
        var itemText = e.target.innerHTML;

        ItemInteractor.updateItem(itemId, itemText, ElementHelper.findParentElementByClassName(e.target, 'item'));
    },

    onUpdateItemKeyPressEventHandler: function (e) {
        var itemTextElement = e.target.parentElement.parentElement.getElementsByClassName('item-text')[0];
        if (EventHelper.isEnter(e) && e.target.value !== itemTextElement.innerHTML) {
            ItemInteractor.updateItemRequest({ updateItemElem: e.target });
        }
    }
};

/*
 * Init
 */

UrlHelper.init(window.location.href);

UserInteractor.init();
AssociationInteractor.init();
DirectoryInteractor.init();
ItemInteractor.init();

ComponentInteractor.components.chart.init();

/*
 * Run
 */

var root = document.getElementById('root');

NavBarInteractor.loadView({ parent: root });

AssociationInteractor.loadView({ parent: root });

/*
 * Event Handlers
 */

document.onkeydown = function (e) {
    if (EventHelper.isEsc(e)) {
        ElementHelper.cancelActiveElements();
    }
}

window.onresize = function (e) {
    for (var key in EventHelper.resizeEventHandlers) {
        if (EventHelper.resizeEventHandlers.hasOwnProperty(key)) {
            var args = EventHelper.resizeEventHandlers[key].args;
            var handler = EventHelper.resizeEventHandlers[key].handler;
            handler(e, args);
        }
    }
}

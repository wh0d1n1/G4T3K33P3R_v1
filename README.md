# Heroku Docker Gunicorn boilerplate [![Django CI](https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate/workflows/Django%20CI/badge.svg)](https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate/actions)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate)

This boilerplate provides an example of a React / Django (Client / Server) based application hosted on Heroku with a Gunicorn Django setup running in Docker.

## Relevant files

### [app.json](https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate/blob/master/heroku.yml)

The app.json file is there for specifiying all the dependencies of your Heroku application. These can be addon-specific ones (Postgres e.g.), environment variables which needs to be set or hardware specification for you dynamic created environments via Review Apps.

Find more about that file in the [Heroku docs](https://devcenter.heroku.com/articles/app-json-schema).

### [Dockerfile](https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate/blob/master/Dockerfile)

The Dockerfile combines the React Django application in a single Docker image. It first builds the client and then installs all the necessary dependencies for Django backend.

Find more about that file in the [Heroku docs](https://devcenter.heroku.com/articles/container-registry-and-runtime#dockerfile-commands-and-runtime).

### [heroku.yml](https://github.com/scoutbee/heroku-docker-gunicorn-boilerplate/blob/master/heroku.yml)

Via this file you combine the Dockerfile with your Heroku setup by instructing which Dockerfile should be used with which container. In our case we use the Dockerfile in the root directory as a web container which can act as a web server.

Find more about that file in the [Heroku docs](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml).

## Other boilerplates for React / Django

- [Heroku Gunicorn](https://github.com/scoutbee/heroku-gunicorn-boilerplate)
- [Heroku NGINX Gunicorn](https://github.com/scoutbee/heroku-nginx-gunicorn-boilerplate)


Compiled with problems:X

./src/assets/theme-dark/base/boxShadows.js 24:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\base'


./src/assets/theme-dark/base/boxShadows.js 26:0-64

'./assets/theme-dark/functions/boxShadow' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\base'


./src/assets/theme-dark/base/globals.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\base'


./src/assets/theme-dark/base/typography.js 24:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\base'


./src/assets/theme-dark/base/typography.js 26:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\base'


./src/assets/theme-dark/components/avatar.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/breadcrumbs.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/breadcrumbs.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/button/index.js 18:0-62

'./assets/theme-dark/components/button/root' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\button'


./src/assets/theme-dark/components/button/index.js 19:0-72

'./assets/theme-dark/components/button/contained' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\button'


./src/assets/theme-dark/components/button/index.js 20:0-70

'./assets/theme-dark/components/button/outlined' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\button'


./src/assets/theme-dark/components/button/index.js 21:0-68

'./assets/theme-dark/components/button/text' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\button'


./src/assets/theme-dark/components/card/cardContent.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/cardMedia.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/cardMedia.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/index.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/index.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/index.js 20:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/card/index.js 22:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\card'


./src/assets/theme-dark/components/container.js 18:0-63

'./assets/theme-dark/base/breakpoints' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/container.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/dialog/dialogActions.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContent.js 18:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContent.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContent.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContent.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContent.js 23:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContentText.js 18:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContentText.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogContentText.js 21:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogTitle.js 18:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/dialogTitle.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/index.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/dialog/index.js 19:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\dialog'


./src/assets/theme-dark/components/divider.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/divider.js 20:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/divider.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/flatpickr.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/flatpickr.js 20:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/form/autocomplete.js 18:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/autocomplete.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/autocomplete.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/autocomplete.js 21:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/autocomplete.js 23:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/autocomplete.js 24:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/checkbox.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/checkbox.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/checkbox.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/checkbox.js 22:0-74

'./assets/theme-dark/functions/linearGradient' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/formControlLabel.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/formControlLabel.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/formControlLabel.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/formLabel.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/input.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/input.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/input.js 20:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/input.js 22:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputLabel.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputLabel.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputOutlined.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputOutlined.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputOutlined.js 20:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputOutlined.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/inputOutlined.js 23:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/radio.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/radio.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/radio.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/radio.js 22:0-74

'./assets/theme-dark/functions/linearGradient' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/select.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/select.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/switchButton.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/switchButton.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/switchButton.js 20:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/switchButton.js 23:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/switchButton.js 24:0-74

'./assets/theme-dark/functions/linearGradient' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/form/textField.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\form'


./src/assets/theme-dark/components/icon.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/iconButton.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/linearProgress.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/linearProgress.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/linearProgress.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/menu/index.js 18:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/index.js 19:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/index.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/index.js 21:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/index.js 23:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/menuItem.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/menuItem.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/menuItem.js 20:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/menuItem.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/menu/menuItem.js 23:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\menu'


./src/assets/theme-dark/components/popover.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/popover.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/popover.js 21:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/popover.js 22:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/sidenav.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/sidenav.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/sidenav.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/slider.js 18:0-48

'./assets/theme/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/slider.js 19:0-50

'./assets/theme/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/slider.js 20:0-56

'./assets/theme/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/slider.js 22:0-55

'./assets/theme/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/stepper/index.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/index.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/index.js 20:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/index.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/index.js 23:0-74

'./assets/theme-dark/functions/linearGradient' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/step.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepConnector.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepConnector.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepIcon.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepIcon.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepIcon.js 21:0-64

'./assets/theme-dark/functions/boxShadow' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepLabel.js 18:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepLabel.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepLabel.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/stepper/stepLabel.js 22:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\stepper'


./src/assets/theme-dark/components/svgIcon.js 18:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/table/tableCell.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableCell.js 19:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableCell.js 21:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableContainer.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableContainer.js 19:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableContainer.js 20:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableHead.js 18:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/table/tableHead.js 20:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\table'


./src/assets/theme-dark/components/tabs/index.js 18:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/index.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/index.js 20:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/index.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/tab.js 18:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/tab.js 19:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/tab.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tabs/tab.js 22:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components\tabs'


./src/assets/theme-dark/components/tooltip.js 20:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/tooltip.js 21:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/tooltip.js 22:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/components/tooltip.js 24:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\components'


./src/assets/theme-dark/functions/boxShadow.js 22:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\functions'


./src/assets/theme-dark/functions/boxShadow.js 23:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\functions'


./src/assets/theme-dark/functions/rgba.js 23:0-62

'./assets/theme-dark/functions/hexToRgb' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark\functions'


./src/assets/theme-dark/index.js 21:0-53

'./assets/theme-dark/base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 22:0-63

'./assets/theme-dark/base/breakpoints' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 23:0-61

'./assets/theme-dark/base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 24:0-61

'./assets/theme-dark/base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 25:0-55

'./assets/theme-dark/base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 26:0-55

'./assets/theme-dark/base/globals' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 28:0-64

'./assets/theme-dark/functions/boxShadow' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 29:0-62

'./assets/theme-dark/functions/hexToRgb' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 30:0-74

'./assets/theme-dark/functions/linearGradient' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 31:0-60

'./assets/theme-dark/functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 32:0-54

'./assets/theme-dark/functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 34:0-61

'./assets/theme-dark/components/sidenav' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 35:0-55

'./assets/theme-dark/components/list' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 36:0-68

'./assets/theme-dark/components/list/listItem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 37:0-76

'./assets/theme-dark/components/list/listItemText' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 38:0-55

'./assets/theme-dark/components/card' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 39:0-70

'./assets/theme-dark/components/card/cardMedia' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 40:0-74

'./assets/theme-dark/components/card/cardContent' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 41:0-59

'./assets/theme-dark/components/button' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 42:0-67

'./assets/theme-dark/components/iconButton' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 43:0-62

'./assets/theme-dark/components/form/input' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 44:0-72

'./assets/theme-dark/components/form/inputLabel' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 45:0-78

'./assets/theme-dark/components/form/inputOutlined' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 46:0-70

'./assets/theme-dark/components/form/textField' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 47:0-55

'./assets/theme-dark/components/menu' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 48:0-68

'./assets/theme-dark/components/menu/menuItem' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 49:0-76

'./assets/theme-dark/components/form/switchButton' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 50:0-61

'./assets/theme-dark/components/divider' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 51:0-81

'./assets/theme-dark/components/table/tableContainer' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 52:0-71

'./assets/theme-dark/components/table/tableHead' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 53:0-71

'./assets/theme-dark/components/table/tableCell' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 54:0-75

'./assets/theme-dark/components/linearProgress' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 55:0-69

'./assets/theme-dark/components/breadcrumbs' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 56:0-59

'./assets/theme-dark/components/slider' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 57:0-59

'./assets/theme-dark/components/avatar' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 58:0-61

'./assets/theme-dark/components/tooltip' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 59:0-59

'./assets/theme-dark/components/appBar' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 60:0-55

'./assets/theme-dark/components/tabs' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 61:0-58

'./assets/theme-dark/components/tabs/tab' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 62:0-61

'./assets/theme-dark/components/stepper' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 63:0-63

'./assets/theme-dark/components/stepper/step' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 64:0-81

'./assets/theme-dark/components/stepper/stepConnector' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 65:0-73

'./assets/theme-dark/components/stepper/stepLabel' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 66:0-71

'./assets/theme-dark/components/stepper/stepIcon' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 67:0-64

'./assets/theme-dark/components/form/select' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 68:0-84

'./assets/theme-dark/components/form/formControlLabel' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 69:0-70

'./assets/theme-dark/components/form/formLabel' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 70:0-68

'./assets/theme-dark/components/form/checkbox' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 71:0-62

'./assets/theme-dark/components/form/radio' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 72:0-76

'./assets/theme-dark/components/form/autocomplete' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 73:0-65

'./assets/theme-dark/components/flatpickr' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 74:0-65

'./assets/theme-dark/components/container' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 75:0-61

'./assets/theme-dark/components/popover' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 76:0-67

'./assets/theme-dark/components/buttonBase' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 77:0-55

'./assets/theme-dark/components/icon' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 78:0-61

'./assets/theme-dark/components/svgIcon' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 79:0-55

'./assets/theme-dark/components/link' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 80:0-59

'./assets/theme-dark/components/dialog' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 81:0-76

'./assets/theme-dark/components/dialog/dialogTitle' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 82:0-80

'./assets/theme-dark/components/dialog/dialogContent' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 83:0-88

'./assets/theme-dark/components/dialog/dialogContentText' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme-dark/index.js 84:0-80

'./assets/theme-dark/components/dialog/dialogActions' in 'D:\Q\gatekeeper\frontend\src\assets\theme-dark'


./src/assets/theme/base/boxShadows.js 26:0-59

'./assets/theme/functions/boxShadow' in 'D:\Q\gatekeeper\frontend\src\assets\theme\base'


./src/assets/theme/components/avatar.js 18:0-37

'./base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/breadcrumbs.js 18:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/breadcrumbs.js 19:0-43

'./base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/container.js 18:0-45

'./base/breakpoints' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/container.js 20:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/divider.js 18:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/divider.js 20:0-36

'./functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/divider.js 21:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/flatpickr.js 18:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/flatpickr.js 20:0-36

'./functions/rgba' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/icon.js 18:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/iconButton.js 18:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/linearProgress.js 18:0-37

'./base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/linearProgress.js 19:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/linearProgress.js 21:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/popover.js 18:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/popover.js 20:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/popover.js 21:0-43

'./base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/popover.js 22:0-37

'./base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/sidenav.js 18:0-35

'./base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/sidenav.js 19:0-37

'./base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/sidenav.js 21:0-42

'./functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/slider.js 18:0-41

'./../../base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/slider.js 19:0-43

'./../../base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/slider.js 20:0-49

'./../../base/boxShadows' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/slider.js 22:0-48

'./../../functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/slider.js 23:0-52

'./../../functions/boxShadow' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/svgIcon.js 18:0-48

'./../../functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/tooltip.js 20:0-41

'./../../base/colors' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/tooltip.js 21:0-49

'./../../base/typography' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/tooltip.js 22:0-43

'./../../base/borders' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


./src/assets/theme/components/tooltip.js 24:0-48

'./../../functions/pxToRem' in 'D:\Q\gatekeeper\frontend\src\assets\theme\components'


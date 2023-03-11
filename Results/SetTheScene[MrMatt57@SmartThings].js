
const { SmartApp } = require('@smartthings/smartapp')

module.exports = new SmartApp()
    .enableEventLogging(2)
    .configureI18n()
    .page('mainPage', (context, page, configData) => {

        page.section('Switches to remember...', section => {
            section.deviceSetting('switches').capability(['switch']).name('');

        });


    })

    .updated(async (context, updateData) => {

    })
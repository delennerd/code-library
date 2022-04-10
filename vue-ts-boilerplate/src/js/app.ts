/**
 * @author      Pascal Lehnert <mail@delennerd.de>
 * @copyright   2022 delennerd.media
 */

// import * as $ from "jquery";
const $ = require('jquery')
// (<any>window).$ = $;

// Vendor
import '@popperjs/core'
import 'bootstrap'
// import moment from "moment";

import mrcVideos from './modules/mrc-videos'
// @ts-ignore

// Vue
import Vue from 'vue'
import { myStore } from '@app/vue/store/leadform'

// Components
import MrcHeaderSlider from '@components/Leadform/MrcHeaderSlider.vue'

// Vue.use(Datepicker)

class ExampleApp {
    constructor() {
        this.initVueApp()
    }

    /**
     * Init Vue App for customer communication
     */
    initVueApp() {
        // App
        Vue.mixin(require('@app/vue/mixins/trans'))

        new Vue({
            el: '#app-customer-communication',
            store: customerportalStore,
            components: {
                CustomerCommunication,
            },
            data: () => ({
                ajaxObject: window.my_custom_object,
                lang: [],
                fbApp: null,
                datetime: {
                    dateFormat: 'DD.MM.YYYY',
                    timeFormat: 'HH:mm',
                },
                customer: {},
                contract: {},
                documentUrl: '',
                documentLoading: false,
                documents: {
                    estimation: {}, // Angebot
                    agreement: {}, // Vor Reinigung
                    confirmation: {}, // Nach Reinigung
                    bill: {}, // Rechnung
                    beforeReinigung: '',
                    afterReinigung: '',
                },
            }),
            mounted() {},
            methods: {
                // getDateTimeFormats(): void {
                //     const dateFormat = mrcleaner_ajax_object.datetime.date_format
                //     console.log(mrcleaner_ajax_object.datetime.time_format)
                //     this.datetime.dateFormat = dateFormat
                //     console.log(DateTimeFormat)
                // },
            },
        })
    }
}

new ExampleApp()

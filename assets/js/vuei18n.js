
// 2. Create i18n instance with options
let locale = localStorage.getItem('locale') || 'tw'

const i18n = VueI18n.createI18n({
    locale: locale, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})


// 3. Create a vue root instance
const app = Vue.createApp({
    
    // set something options
    // ...
})

// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n)

// 5. Mount
app.mount('#app')









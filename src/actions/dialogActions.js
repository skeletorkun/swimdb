export const SHOW_ABOUT_DIALOG = 'SHOW_ABOUT_DIALOG'
export const HIDE_ABOUT_DIALOG = 'HIDE_ABOUT_DIALOG'

export const showAboutDialog = () =>({
    type: SHOW_ABOUT_DIALOG,
    modalType: 'about',
    modalProps: { 
        open : true
    }
})
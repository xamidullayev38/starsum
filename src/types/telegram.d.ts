declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                ready(): void
                expand(): void
                close(): void
                MainButton: {
                    text: string
                    color: string
                    textColor: string
                    isVisible: boolean
                    isActive: boolean
                    setText(text: string): void
                    onClick(callback: () => void): void
                    show(): void
                    hide(): void
                }
                BackButton: {
                    isVisible: boolean
                    onClick(callback: () => void): void
                    show(): void
                    hide(): void
                }
                HapticFeedback: {
                    impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void
                    notificationOccurred(type: "error" | "success" | "warning"): void
                    selectionChanged(): void
                }
                initData: string
                initDataUnsafe: any
                version: string
                platform: string
                colorScheme: "light" | "dark"
                themeParams: {
                    bg_color?: string
                    text_color?: string
                    hint_color?: string
                    link_color?: string
                    button_color?: string
                    button_text_color?: string
                }
                isExpanded: boolean
                viewportHeight: number
                viewportStableHeight: number
                headerColor: string
                backgroundColor: string
                isClosingConfirmationEnabled: boolean
                onEvent(eventType: string, callback: () => void): void
                offEvent(eventType: string, callback: () => void): void
                sendData(data: string): void
                switchInlineQuery(query: string, choose_chat_types?: string[]): void
                openLink(url: string, options?: { try_instant_view?: boolean }): void
                openTelegramLink(url: string): void
                openInvoice(url: string, callback?: (status: string) => void): void
                showPopup(
                    params: {
                        title?: string
                        message: string
                        buttons?: Array<{
                            id?: string
                            type?: "default" | "ok" | "close" | "cancel" | "destructive"
                            text: string
                        }>
                    },
                    callback?: (buttonId: string) => void,
                ): void
                showAlert(message: string, callback?: () => void): void
                showConfirm(message: string, callback?: (confirmed: boolean) => void): void
                showScanQrPopup(
                    params: {
                        text?: string
                    },
                    callback?: (text: string) => void,
                ): void
                closeScanQrPopup(): void
                readTextFromClipboard(callback?: (text: string) => void): void
                requestWriteAccess(callback?: (granted: boolean) => void): void
                requestContact(callback?: (granted: boolean) => void): void
            }
        }
        TelegramWebviewProxy?: {
            postEvent(eventType: string, eventData: string): void
        }
        external?: {
            notify(data: string): void
        }
    }
}

export {}

export interface MessageBrokerConfig {
    host: string,
    messageBrokerUsername: string,
    messageBrokerPassword: string
}

export abstract class MessageBrokerConfiguration {
    public static host: string;
    public static username: string;
    public static password: string;

    public static Setup(
        config: MessageBrokerConfig
    ): void {
        this.host = config.host;
        this.username = config.messageBrokerUsername;
        this.password = config.messageBrokerPassword;
    }

    public static Verify(): void {
        if (this.host === undefined || this.host.length === 0) {
            throw new Error('No host specified');
        }

        if (this.username === undefined || this.username.length === 0) {
            throw new Error('No username specified');
        }

        if (this.password === undefined || this.password.length === 0) {
            throw new Error('No password specified');
        }
    }
}
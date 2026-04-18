export const SERVICES = {
    API_GATEWAY: 'api-gateway',
    AUTH_SERVICE: 'auth-service',
    USERS_SERVICE: 'users-service',
    EVENTS_SERVICE: 'events-service',
    TICKETS_SERVICE: 'ticket-serice',
    NOTIFICATION_SERVICE: 'notification-service'
} as const;

export const  SERVICE_PORT = {
    API_GATEWAY: 3000,
    AUTH_PORT: 3001,
    USERS_PORT: 3002,
    EVENTS_PORT: 3003,
    TICKETS_PORT: 3004,
    NOTIFICATION_PORT: 3005
} as const;
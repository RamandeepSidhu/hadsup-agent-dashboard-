export interface SaleAgentDashboard {
    currency_sign: string;
    system_earned: number;
    system_earned_by_dates: any;
    locationOwners: SaleAgentDashboard[];
    devices: any[];
    location_owner_earned: number;
    location_owner_by_dates: any;
    location_agent_earned: number;
    location_agent_earned_by_dates: any;
    average_device_earned: number;
    total_devices: any;
    role_today_revenue: number;
    locations: number;
    today_revenue_share: number;
    advertisers: any;
    date: any;
    pending_balance: number;
    name?: string;
    address?: string;
    earnings?: number;
    type?: string;
    location?: any;
}

export interface ILocationOwner {
    id: number;
    user_name: string;
    user_surname: string;
    earned: number;
    locations_with_devices: SaleAgentDashboard[];
    length: any;
}

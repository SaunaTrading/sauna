export type User = {
    name: string;
    steamid: string;
    sui_address: number;
    profile_picture: string;
};

export type Asset = {
    assetid: string;
    asset_image: string;
    asset_sui_address: number;
};

export type Transaction = {
    sender: string;
    receiver: string;
    sent_assets: string[];
    received_assets: string[];
    sent_assets_cost: number;
    received_assets_cost: number;
};
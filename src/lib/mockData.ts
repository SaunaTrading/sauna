// Defining types
import { User, Asset, Transaction } from "./types";

// Mock Users Data
const users: User[] = [
    { name: "Tanner", steamid: "user123", sui_address: 1001, profile_picture: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc5LTAwNy1wXzEtbDE2N3ljZzkucG5n.png" },
    // ... more users
];

// Mock Assets Data
const assets: Asset[] = [
    { assetid: "asset123", asset_image: "path/to/asset1.jpg", asset_sui_address: 2001 },
    // ... more assets
];

// Mock Transactions Data
const transactions: Transaction[] = [
    {
        sender: "user123",
        receiver: "user456",
        sent_assets: ["asset123"],
        received_assets: ["asset456"],
        sent_assets_cost: 100,
        received_assets_cost: 150,
    },
    // ... more transactions
];

// Mock fetch functions
export const fetchUsers = (): Promise<User[]> => new Promise(resolve => setTimeout(() => resolve(users), 1000));
export const fetchAssets = (): Promise<Asset[]> => new Promise(resolve => setTimeout(() => resolve(assets), 1000));
export const fetchTransactions = (): Promise<Transaction[]> => new Promise(resolve => setTimeout(() => resolve(transactions), 1000));

export { users, assets, transactions };

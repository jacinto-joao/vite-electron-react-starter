export interface User {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: number;
    nickName: string;
    avatar: string;
    cover?: string;
    bankAccounts?: BankAccount[]
}

 interface BankAccount {
    bankName: string;
    accountType: string;
    accountNumber: string;
    branchCode: any;
    accountBalance: number;
    accountCreatedAt: Date;
}
export type User = {
    firstName: string;
    lastName: string;
    email?: string;
    gender: string;
    dob: Date;
    mobileNumber?: number;
    nickName?: string;
    avatar?: string;
    cover?: string;
    bankAccounts?: BankAccount[]
}

 type BankAccount  = {
    bankName: string;
    accountType: string;
    accountNumber: string;
    branchCode: string | number;
    accountBalance: number;
    accountCreatedAt: Date | string | number;
}
export interface Records {
    invoice_number: string,
    transaction_type: string,
    description: string,
    total_amount: number,
    created_on: string
}

export interface TransactionType {
    offset: string,
    limit: string,
    records: Records[]
}
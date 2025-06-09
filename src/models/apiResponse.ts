export interface ApiResponse<T> { // 제네릭 타입 
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: T[];
}
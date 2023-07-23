export const apiHost = 'http://localhost:3000';


export function headerWithoutToken() {
    return {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
}

export function headerWithToken(token: string) {
    return {
        'authorization': `Bearer ${token}`,
        'accept': 'application/json',
        'content-type': 'application/json'
    }
}
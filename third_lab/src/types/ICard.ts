export interface ICard{
    category: string
    id: number
    title: string
    description: string
    image: string
    //refs: [string, string]
    refs: [string, string][]
}
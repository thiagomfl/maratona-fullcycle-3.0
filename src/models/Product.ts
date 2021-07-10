export interface Product {
  id: string
  name: string
  description: string
  image_url: string
  slug: string
  price: number
  created_at: string
}

export const products: Product[] = [{
  id: 'uuid',
  price: 99.99,
  name: 'Produto Teste',
  slug: 'produto-teste',
  description: 'Lorem Ipsum',
  image_url: `https://source.unsplash.com/random?product,${Math.random()}`,
  created_at: '2021-07-08T22:55:00'
}]

import Link from 'next/link'
import { Container } from '../atoms/container'

export interface IFooterProps {}

export const Footer = () => (
  <footer className="py-8 mt-8 text-xs bg-gray-200">
    <Container className="justify-between sm:flex">
      <Link
        target="_blank"
        href="https://github.com/Brayham-Carvalho"
        rel="noreferrer"
      >
        <div className="font-black py-0.5">Brayham Carvalho</div>
        <div>Portfolio</div>
        2024
      </Link>
      <div className="grid grid-cols-3 gap-x-4 gap-y-2"></div>
    </Container>
  </footer>
)

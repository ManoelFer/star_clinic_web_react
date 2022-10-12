import { Header } from '@/components'

import { ILayoutProps } from './interfaces'

import { Container } from './styles'

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}

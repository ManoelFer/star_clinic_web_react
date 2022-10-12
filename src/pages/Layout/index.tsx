import { Header } from '@/components'

import { ILayoutProps } from './interfaces'

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

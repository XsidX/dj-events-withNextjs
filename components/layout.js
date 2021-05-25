import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from './header' 
import Footer from './footer'
import Showcase from './showcase'

export default function Layout({title, keywords,
     description, children}) {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name ='description' content =
                    {description}
                />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {/* limiting the component to a specific route: ie '/' using shorthand if then */}
            {router.pathname === '/' && <Showcase />}  
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}


Layout.defaultProps ={
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events'
}
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>My Site
          </Translate>        
        </Heading>
        <p className="hero__subtitle"><Translate>The tagline of my site</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            <Translate>Docusaurus Tutorial - 5min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="text--center">
          <img src='@site\static\img\undraw_docusaurus_mountain.svg' alt='Easy to Use'/>
          <h3><Translate description="The homepage message to ask the user to visit this website">Easy To Use</Translate></h3>
          <p><Translate>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly. 
            </Translate></p>
        </div>
      </main>
    </Layout>
  );
}

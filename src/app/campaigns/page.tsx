import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { campaigns } from '@/lib/placeholder-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Campaigns | Raise India Foundation',
  description: 'Support our active campaigns and help us reach our fundraising goals.',
};

export default function CampaignsPage() {
  const featuredCampaign = campaigns[0];
  const otherCampaigns = campaigns.slice(1);

  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <Container>
          <h1 className="statement-text">Support a Cause</h1>
          <p className={styles.heroDescription}>
            Every campaign represents a specific challenge we are working to solve. Choose a cause that resonates with you.
          </p>
        </Container>
      </section>

      {/* Featured Campaign */}
      <section className={styles.featuredSection}>
        <Container>
          <h2 className={styles.sectionLabel}>Featured Campaign</h2>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <div className={styles.imagePlaceholderPrimary}></div>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.categoryBadge}>{featuredCampaign.category}</span>
              <h3 className={styles.featuredTitle}>{featuredCampaign.title}</h3>
              <p className={styles.featuredDesc}>{featuredCampaign.shortDescription}</p>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressStats}>
                  <span><strong>₹{featuredCampaign.raised.toLocaleString()}</strong> raised</span>
                  <span>Goal: ₹{featuredCampaign.goal.toLocaleString()}</span>
                </div>
                <div className={styles.progressBarBg}>
                  <div 
                    className={styles.progressBarFill} 
                    style={{ width: `${Math.min((featuredCampaign.raised / featuredCampaign.goal) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className={styles.actions}>
                <Link href={`/campaigns/${featuredCampaign.slug}`} className={styles.readMoreBtn}>
                  Campaign Details
                </Link>
                <Link href="/donate" className={styles.donateBtn}>
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Campaigns */}
      <section className={styles.gridSection}>
        <Container>
          <h2 className={styles.sectionLabel}>Active Campaigns</h2>
          <div className={styles.campaignGrid}>
            {otherCampaigns.map((campaign) => (
              <div key={campaign.id} className={styles.campaignCard}>
                <div className={styles.cardImage}>
                   <div className={styles.imagePlaceholderSecondary}></div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.categoryBadge}>{campaign.category}</span>
                  <h4 className={styles.cardTitle}>{campaign.title}</h4>
                  
                  <div className={styles.progressContainerSmall}>
                    <div className={styles.progressBarBgSmall}>
                      <div 
                        className={styles.progressBarFillSmall} 
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className={styles.progressStatsSmall}>
                      <span>₹{campaign.raised.toLocaleString()} raised</span>
                      <span>{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                    </div>
                  </div>
                  
                  <Link href={`/campaigns/${campaign.slug}`} className={styles.cardLink}>
                    View Campaign &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

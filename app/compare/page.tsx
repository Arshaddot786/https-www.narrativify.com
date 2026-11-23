import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CTA, Eyebrow, PageIntro } from '@/components/Sections';
import { social, radar, conversation } from '@/components/plans';
import { tools, PRICES_CHECKED } from '@/components/serviceDetails';

export const metadata: Metadata = {
  title: 'Narrativify vs software tools',
  description: 'An honest look at what common social media and listening tools cost, what they leave to you, and where a managed service fits.',
  alternates: { canonical: '/compare' }
};

const money = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const annual = (n: number) => '$' + (n * 12 * 0.9).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Example stacks are calculated from the same numbers shown elsewhere on the site.
const channels = 2;
const bufferTwo = tools.buffer.monthlyFrom * channels;
const stackA = bufferTwo + tools.brand24.monthlyFrom;
const stackB = stackA + tools.redreplier.monthlyFrom;
const ourA = social[1].price + radar[0].price;
const ourB = ourA + conversation[0].price;

export default function Compare() {
  const order = ['buffer', 'hootsuite', 'sprout', 'brand24', 'redreplier'];
  return <main>
    <PageIntro eyebrow="Software vs service" title="What the tools cost. What they leave to you." body="Automation is useful. It also leaves the thinking, writing and relationship-building to you. Here is an honest side-by-side so you can decide what fits." />

    <section className="detail-block"><div className="container">
      <Eyebrow>Common tools</Eyebrow><h2 className="detail-title">What you'd pay <em>for software.</em></h2>
      <div className="table-wrap"><table className="compare-table">
        <thead><tr><th>Tool</th><th>List price</th><th>What it does</th><th>What it leaves to you</th></tr></thead>
        <tbody>{order.map((k) => { const t = tools[k]; return <tr key={k}><td><b>{t.name}</b></td><td>{t.price}</td><td>{t.covers}</td><td>{t.leaves}</td></tr>; })}</tbody>
      </table></div>
      <p className="fine-print">Public list prices checked in {PRICES_CHECKED}. Vendors change prices, limits and plans often, so confirm on each site before deciding. Monthly prices above assume annual billing where the vendor offers it.</p>
    </div></section>

    <section className="detail-block alt"><div className="container">
      <Eyebrow>Example monthly costs</Eyebrow><h2 className="detail-title">Software only, <em>or done with you.</em></h2>
      <div className="table-wrap"><table className="compare-table">
        <thead><tr><th>What you want</th><th>Software only (you do the work)</th><th>Narrativify (we do the work)</th></tr></thead>
        <tbody>
          <tr>
            <td><b>Social presence on 2 platforms, plus listening</b></td>
            <td><b>{money(stackA)} / month</b><br />Buffer for {channels} channels ({money(bufferTwo)}) + Brand24 ({money(tools.brand24.monthlyFrom)}). You plan, write, design, post and review alerts.</td>
            <td><b>{money(ourA)} / month</b> ({annual(ourA)} / year with annual payment)<br />Social Growth ({money(social[1].price)}) + Radar Starter ({money(radar[0].price)}). We plan, create, publish and review alerts.</td>
          </tr>
          <tr>
            <td><b>The above, plus conversation participation</b></td>
            <td><b>{money(stackB)} / month</b><br />Adds RedReplier ({money(tools.redreplier.monthlyFrom)}). You still write each reply and follow every community's rules.</td>
            <td><b>{money(ourB)} / month</b> ({annual(ourB)} / year with annual payment)<br />Adds Conversation Starter ({money(conversation[0].price)}). People write and review each contribution.</td>
          </tr>
        </tbody>
      </table></div>
      <p className="large-copy narrow-copy">Software is cheaper in cash. The question is whose time it takes. If you have the hours and skill to run it yourself, software can be a good choice. If you would rather have people handle it, that is what Narrativify is for.</p>
      <p className="fine-print">Example stacks use each vendor's entry plan and Narrativify's published prices. Your needs, platform count and plan limits may differ. Software costs exclude your own time.</p>
    </div></section>

    <section className="detail-block"><div className="container">
      <Eyebrow>Where we're different</Eyebrow><h2 className="detail-title">One team, <em>four connected services.</em></h2>
      <div className="values-grid">
        <div><span>01</span><h3>People in charge</h3><p>Tools suggest and schedule. People write, review and decide, so what goes out sounds like a brand and not a script.</p></div>
        <div><span>02</span><h3>One plan, not five logins</h3><p>Social presence, listening, participation and distribution work together instead of living in separate dashboards.</p></div>
        <div><span>03</span><h3>Platform-aware by design</h3><p>No fake accounts, no purchased engagement, no undisclosed promotion. Slower than a bot, safer for your reputation.</p></div>
      </div>
      <p className="fine-print">We do not promise revenue, rankings, followers or virality, and no software or agency honestly can. We aim to build visibility and relationships that give you more genuine opportunities to talk to the right people.</p>
      <div className="inline-actions"><Link className="button button-dark" href="/pricing">See pricing <ArrowUpRight size={16} /></Link><Link className="button button-outline" href="/services">Explore services <ArrowUpRight size={16} /></Link></div>
    </div></section>

    <section className="detail-block alt"><div className="container">
      <Eyebrow>Sources</Eyebrow>
      <ul className="source-list">
        {order.map((k) => <li key={k}><a href={tools[k].source} target="_blank" rel="noopener noreferrer">{tools[k].name} pricing</a></li>)}
      </ul>
    </div></section>

    <CTA title="Want help choosing?" body="Tell us what you're doing today and what you would like to stop doing. We'll suggest a sensible starting point." />
  </main>;
}

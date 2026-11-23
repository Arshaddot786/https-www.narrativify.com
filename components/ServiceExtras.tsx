import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CheckList, Eyebrow } from '@/components/Sections';
import { social, radar, conversation, visibility } from '@/components/plans';
import { serviceDetails, tools, PRICES_CHECKED } from '@/components/serviceDetails';

const money = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const annual = (monthly: number) => money(monthly * 12 * 0.9);

type Row = { name: string; price: number; inc: string; note?: string };

function planRows(slug: string, includes: string[]): { rows: Row[]; footnote: string } {
  if (slug === 'social-media-management') {
    return {
      rows: social.map((p: any) => ({ name: p.name, price: p.price, inc: `${p.platforms}. ${p.items.join('; ')}.` })),
      footnote: 'Five or more platforms are quoted separately. Platform selection is agreed at onboarding.'
    };
  }
  const shared = `Every plan includes: ${includes.join('; ').toLowerCase()}.`;
  if (slug === 'conversation-intelligence-radar') {
    return {
      rows: radar.map((p: any) => ({ name: p.name, price: p.price, inc: `${p.detail.replace(/ · /g, '. ')}. ${shared}` })),
      footnote: 'Keyword and alert limits are plan allowances. Relevant opportunities depend on platform availability, keyword relevance and monitoring coverage.'
    };
  }
  if (slug === 'managed-conversation-marketing') {
    return {
      rows: conversation.map((p: any) => ({ name: p.name, price: p.price, inc: `${p.detail}. ${shared}` })),
      footnote: 'Volumes are proposed monthly activity targets, not guaranteed likes, shares, followers or other platform metrics. Work follows each platform and community\'s rules.'
    };
  }
  return {
    rows: visibility.map((p: any) => ({ name: p.name, price: p.price, inc: `${p.detail}. ${shared}`, note: `${p.partner}. ${p.total}.` })),
    footnote: 'Partner budgets are estimates, separate from our management fee and not discounted. Every external cost needs your approval before commitment. Placement numbers are maximums.'
  };
}

export function ServiceExtras({ slug, includes }: { slug: string; includes: string[] }) {
  const d = serviceDetails[slug];
  if (!d) return null;
  const { rows, footnote } = planRows(slug, includes);
  const list = d.versus.toolKeys.map((k) => tools[k]);

  return <>
    <section className="detail-block"><div className="container">
      <Eyebrow>How it works</Eyebrow><h2 className="detail-title">Four steps, <em>no guesswork.</em></h2>
      <div className="steps-grid steps-four">{d.process.map((s, i) => <div key={s.title}><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p></div>)}</div>
    </div></section>

    <section className="detail-block alt"><div className="container">
      <Eyebrow>Who it's for</Eyebrow><h2 className="detail-title">A good fit <em>if you...</em></h2>
      <div className="values-grid">{d.whoFor.map((s, i) => <div key={s.title}><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p></div>)}</div>
      <h3 className="subheading">What we need from you</h3>
      <div className="values-grid tight">{d.youProvide.map((s) => <div key={s.title}><h3>{s.title}</h3><p>{s.body}</p></div>)}</div>
    </div></section>

    <section className="detail-block"><div className="container">
      <Eyebrow>Plans and pricing</Eyebrow><h2 className="detail-title">What's included <em>in each plan.</em></h2>
      <div className="table-wrap"><table className="compare-table">
        <thead><tr><th>Plan</th><th>Monthly</th><th>Annual (10% off)</th><th>What's included</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.name}><td><b>{r.name}</b></td><td>${r.price}</td><td>{annual(r.price)}</td><td>{r.inc}{r.note && <><br /><span className="partner-cost">{r.note}</span></>}</td></tr>)}</tbody>
      </table></div>
      <p className="fine-print">{footnote} Annual payment is 12 monthly payments less 10%. Exact activities and deliverables are confirmed in your proposal and service agreement.</p>
      <div className="inline-actions"><Link className="button button-dark" href="/pricing">See all pricing <ArrowUpRight size={16} /></Link><Link className="button button-outline" href="/contact">Talk to us <ArrowUpRight size={16} /></Link></div>
    </div></section>

    <section className="detail-block alt"><div className="container">
      <Eyebrow>Compared with software alone</Eyebrow><h2 className="detail-title">What the tools cost, <em>and what they leave.</em></h2>
      <p className="large-copy narrow-copy">{d.versus.intro}</p>
      {list.length > 0 && <div className="table-wrap"><table className="compare-table">
        <thead><tr><th>Tool</th><th>List price</th><th>What it does</th><th>What it leaves to you</th></tr></thead>
        <tbody>{list.map((t) => <tr key={t.name}><td><b>{t.name}</b></td><td>{t.price}</td><td>{t.covers}</td><td>{t.leaves}</td></tr>)}</tbody>
      </table></div>}
      <p className="large-copy narrow-copy">{d.versus.ours}</p>
      <p className="fine-print">{d.versus.note} Third-party prices are public list prices checked in {PRICES_CHECKED}; they change, so confirm on each vendor's site. <Link href="/compare" className="inline-link">See the full comparison</Link>.</p>
    </div></section>

    <section className="detail-block"><div className="container">
      <Eyebrow>How we work</Eyebrow><h2 className="detail-title">Our <em>boundaries.</em></h2>
      <CheckList items={d.boundaries} />
    </div></section>
  </>;
}

const familyMembers = [
  {
    role: "Mother",
    name: "Elena Bennett",
    details:
      "Elena is a pediatric nurse practitioner at Lakeside Children's Clinic. She keeps the family calendar running, volunteers at weekend health fairs, and never misses a debate tournament or soccer match.",
  },
  {
    role: "Father",
    name: "Marcus Bennett",
    details:
      "Marcus is a civil engineer who manages transportation projects for the city. He loves woodworking, coaches youth basketball in the winter, and plans the family's road trips with military precision.",
  },
  {
    role: "Oldest Child",
    name: "Naomi Bennett",
    details:
      "Naomi is 20 and away at the University of Michigan studying environmental science. She works part-time at the campus greenhouse, serves in the sustainability council, and made the dean's list last semester.",
  },
  {
    role: "Middle Child",
    name: "Caleb Bennett",
    details:
      "Caleb is 16 and a junior in high school. He plays varsity soccer, performs trumpet in jazz band, and recently earned first place in the regional robotics competition with his engineering club.",
  },
  {
    role: "Youngest Child",
    name: "Sophie Bennett",
    details:
      "Sophie is 11 and brings the loudest energy in the house. She is in the school art club, swims on the community team, helps neighbors with pet sitting, and won honorable mention in the district reading challenge.",
  },
];

const familyHighlights = [
  "Family pets: a golden retriever named Maple and a rescue cat named Orbit.",
  "Home base: Rochester, New York, in a busy blue house with a vegetable garden in the backyard.",
  "Favorite shared tradition: Friday homemade pizza nights followed by a board game tournament.",
];

const vacationMoments = [
  "Last summer the Bennett family spent a week in Acadia National Park in Maine.",
  "They hiked the Jordan Pond trails, biked the carriage roads, took a whale-watching tour, and watched sunrise from Cadillac Mountain.",
  "Naomi kept a photo journal for her ecology class, Caleb insisted on timing every hike, and Sophie collected sketches of tide pools and lighthouses.",
  "Maple stayed with a neighbor, but Orbit reportedly ignored everyone until the family came home.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Family Web Page</p>
        <h1>The Bennett Family</h1>
        <p className="intro">
          Meet a close-knit family of five balancing careers, school, pets,
          and plenty of activity across two states.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h2>Who&apos;s in the family</h2>
        </div>

        <div className="card-grid">
          {familyMembers.map((member) => (
            <article className="member-card" key={member.name}>
              <p className="member-role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split-layout">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Life At Home</p>
            <h2>What keeps the Bennetts busy</h2>
          </div>
          <ul className="highlight-list">
            {familyHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <aside className="pet-note">
          <h3>Pet corner</h3>
          <p>
            Maple greets every visitor like a long-lost friend, while Orbit
            prefers sunny windows, folded laundry, and judging everyone
            silently from the couch.
          </p>
        </aside>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Last Vacation</p>
          <h2>Acadia memories</h2>
        </div>
        <div className="vacation-story">
          {vacationMoments.map((moment) => (
            <p key={moment}>{moment}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function StatCard({ number, label }) {
  return (
    <div className="text-center">
      <p className="font-heading text-4xl md:text-5xl text-primary">{number}</p>
      <p className="font-body text-xs md:text-sm text-muted uppercase tracking-widest mt-1">
        {label}
      </p>
    </div>
  );
}

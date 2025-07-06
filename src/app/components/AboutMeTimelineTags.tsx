type Props = {
  tags: string[];
};

export default function AboutMeTimelineTags({ tags }: Props) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

import CodeSnippet from "./CodeSnippet";

export default function SectionSnippet() {
  return (
    <div>
      <label
        for="searchInput"
        className="text-sm font-['Inter'] tracking-wider font-bold"
      >
        Search code snippet
      </label>
      <input
        className="w-[1090px] h-12 rounded-sm bg-card indent-10 text-sm font-['Inter'] tracking-wider text-white/60 mt-4 bg.-search"
        placeholder="Type your favorite snippet here, hehehe ....."
        id="searchInput"
      />
      <CodeSnippet />
    </div>
  );
}

export const metadata = {
  title: "My Account",
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, <span className="text-primary-200">[Guest Name]</span>
      </h2>
    </div>
  );
}

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function SignOutButton() {
  return (
    <div>
      <button className="flex gap-4 py-3 px-5 w-full text-primary-100 hover:bg-primary-900 hover:text-primary-200 transition-colors">
        <ArrowRightIcon className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </div>
  );
}

export const metadata = {
  title: "Profile",
};

const inputStyles =
  "h-12 w-full bg-primary-200 text-primary-800  disabled:bg-gray-600 disabled:text-gray-400 dislabled:cursor-not-allowed";

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>
      <p className="text-lg mb-8">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="flex flex-col gap-6 bg-primary-900 py-8 px-10">
        <div className="space-y-2">
          <label>Full name</label>
          <input disabled className={inputStyles}></input>
        </div>
        <div className="space-y-2">
          <label>Email address</label>
          <input disabled className={inputStyles}></input>
        </div>
        <div className="space-y-2">
          <label>Where are you from?</label>
          <input className={inputStyles}></input>
        </div>
        <div>
          <label className="space-y-2">National ID number</label>
          <input className={inputStyles}></input>
        </div>
        <div className="flex justify-end">
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

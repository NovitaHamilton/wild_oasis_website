import SelectCountry from "@/app/_components/SelectCountry";
export const metadata = {
  title: "Profile",
};

const inputStyles =
  "px-5 py-3 h-12 w-full bg-primary-200 text-primary-800  disabled:bg-gray-600 disabled:text-gray-400 dislabled:cursor-not-allowed";

export default function Page() {
  //To be updated
  const countryFlag = "id.jpg";
  const nationality = "indonesia";
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
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country Flag"
              className="h-5 rounded-sm"
            />
          </div>
          <SelectCountry
            name="nationality"
            id="nationality"
            defaultCountry={nationality}
            className="px-5 py-3 bg-primary-200 text-primary-800 h-12 w-full shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input name="nationalID" className={inputStyles}></input>
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

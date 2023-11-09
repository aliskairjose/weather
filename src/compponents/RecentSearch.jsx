
export default function RecentSearch() {
  return (
    <>
      <div className="w-full text-center">
        <h1>Recent Search Weather</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The `Recent Search Weather` section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>

      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-2 overflow-x-auto">
      </div>
    </>
  );
}

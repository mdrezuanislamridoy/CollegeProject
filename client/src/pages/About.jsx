import PersonProfile from "../assets/person.webp";

export default function AboutPage() {
  return (
    <div className="container mx-auto my-10 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
      <hr className="shadow-lg" />
      <br />
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        At "RR Events", we strive to deliver exceptional experiences through
        innovative solutions. Our mission is to empower users by providing
        top-tier services and fostering a supportive community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To consistently provide high-quality solutions that meet the
            evolving needs of our clients with dedication and excellence.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to be a leader in providing innovative, user-centric
            solutions that enhance growth and development for everyone.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Meet the talented individuals behind [Your Website Name]. A diverse
          group of professionals working together to bring you the best
          experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex justify-center items-center">
              <img src={PersonProfile} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex justify-center items-center">
              <img src={PersonProfile} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-600">CTO</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex justify-center items-center">
              <img src={PersonProfile} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Emily Johnson
            </h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Values
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>
            Integrity: Upholding trust and ethical values in every interaction.
          </li>
          <li>
            Innovation: Embracing new technologies to provide cutting-edge
            solutions.
          </li>
          <li>Quality: Striving for excellence in everything we deliver.</li>
          <li>Collaboration: Working together to achieve mutual success.</li>
        </ul>
      </div>
    </div>
  );
}

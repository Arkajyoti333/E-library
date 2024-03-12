import React from 'react'



const users = [
    {
      name: 'Sourashis ',
      image:
        'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/423479242_3690145941266205_4226133062113365698_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NT3U5f4tcIQAX_fmyt2&_nc_ht=scontent.fccu5-1.fna&oh=00_AfAb9HiHO7Qf-0rCzvKYJibgSgq06R7ST4P8RK33wq6uOA&oe=65F0FFF6',
      position: 'Android developer',
    },
    {
      name: 'Soumyajit ',
      image:
        'https://scontent.fccu5-1.fna.fbcdn.net/v/t1.6435-9/153521751_1236588873403824_8811353004128325749_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LAQY1MChscYAX-AexOC&_nc_ht=scontent.fccu5-1.fna&oh=00_AfAtp3j34wv_YWhLRRhPyZhEg8PzA0Ekx9f9oOGGnG4Jsg&oe=6614832F',
      position: 'Android developer',
    },
    {
      name: 'Suvo',
      image:
        'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/273963251_986457692267841_3316659002461553611_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uWaZgwhjEpgAX9CLY0g&_nc_ht=scontent.fccu5-1.fna&oh=00_AfDVwePJu33nRiXp5ZWvRUF2i5rZdQRvNHAvcQgPyzMgYg&oe=65F1EB12',
      position: 'Full-stack developer',
    },
    {
      name: 'Arka',
      image:
        'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-1/338338922_175681051947851_4584870931969226627_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=908miAXEIJgAX8uKYel&_nc_ht=scontent.fccu5-1.fna&oh=00_AfACen9HuaymJGBu67NblHCCKAVUE23D736tuBdZdv4_fA&oe=65F14A1E',
      position: 'Back-end developer',
    },
    {
        name: 'Ananyo',
        image:
          'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311267157_3193164194229426_6403755948150816481_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=If_V7u1pRXIAX-957Jh&_nc_ht=scontent.fccu5-1.fna&oh=00_AfAsTW3pIzZD9UyUMNUaOZpVE4Kuv5sSxQPU-6s2pRFNag&oe=65F149EE',
        position: 'Front-end developer',
      },
  ]

export default function Team() {
  return (
    <>
    <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold text-gray-800 leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b  border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[250px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}

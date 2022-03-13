import React from 'react'

function PxToEmTable() {
  return (
    <div className="flex flex-col max-w-3xl mt-11 mx-auto px-4 ">
    <h1 className="text-2xl text-primary font-semibold py-2">
      Px to Em Conversion Table
    </h1>
    <div class="overflow-x-auto ">
      <div class="py-2 inline-block min-w-full">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm md:text-md font-semibold bg-gray-800 border-b border-secondary text-white px-6 py-4 text-center"
                >
                  Px
                </th>
                <th
                  scope="col"
                  class="text-sm md:text-md font-semibold bg-gray-800 border-b border-secondary text-white px-6 py-4 text-center"
                >
                Em
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    4px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                    0.25em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                 8px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                0.5em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  12px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                0.75em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                16px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  1em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                32px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  2em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  48px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  3em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                 64px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                4em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  80px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                5em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                96px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  6em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                200px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  12.5em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  400px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                25em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                600px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  30em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                768px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                 48em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                 800px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                50em
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                1024px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                64em
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                1200px
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  75em
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PxToEmTable
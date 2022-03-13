import React from 'react'

function EmToPxTable() {
  return (
    <div className="flex flex-col max-w-3xl mt-11 mx-auto px-4 ">
    <h1 className="text-2xl text-primary font-semibold py-2">
      Em to Px Conversion Table
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
                  Em
                </th>
                <th
                  scope="col"
                  class="text-sm md:text-md font-semibold bg-gray-800 border-b border-secondary text-white px-6 py-4 text-center"
                >
                  Px
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  0.25em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  4px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  0.5em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  8px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  0.75em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  12px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  1em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  16px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  2em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  32px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  3em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  48px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  4em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  64px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  5em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  80px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  6em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  96px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  12.5em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  200px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  25em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  400px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  30em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  600px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  48em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  768px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  50em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  800px
                </td>
              </tr>
              <tr class="bg-gray-900 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                64em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  1024px
                </td>
              </tr>
              <tr class="bg-gray-800 border-b border-secondary text-center">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  75em
                </td>
                <td class="text-sm text-primary font-normal px-6 py-4 whitespace-nowrap">
                  1200px
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

export default EmToPxTable
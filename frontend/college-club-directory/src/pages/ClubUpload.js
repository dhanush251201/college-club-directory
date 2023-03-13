import React, { useState } from "react";
export default function ClubUpload() {

  const [name,setName] = useState("")
  const [dept,setDept] = useState("Unaffiliated")
  const [id,setId] = useState("")
  const [structure,setStructure] = useState("Club")
  const [slogan,setSlogan] = useState("")
  const [recYear,setRecYear] = useState(1)
  const [advisor,setAdvisor] = useState("")
  const [secretary,setSecretary] = useState("")
  const [website,setWebsite] = useState("")
  const [whatsapp,setWhatsapp] = useState("")
  const [desc,setDesc] = useState("")

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleDept = (e) => {
    setDept(e.target.value);
  }
  const handleId = (e) => {
    setId(e.target.value);
  }
  const handleStructure = (e) => {
    setStructure(e.target.value);
  }
  const handleSlogan = (e) => {
    setSlogan(e.target.value);
  }
  const handleRecYear = (e) => {
    setRecYear(e.target.value);
  }
  const handleAdvisor = (e) => {
    setAdvisor(e.target.value);
  }
  const handleSecretary = (e) => {
    setSecretary(e.target.value);
  }
  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  }
  const handleWhatsapp = (e) => {
    setWhatsapp(e.target.value);
  }
  const handleDesc = (e) => {
    setDesc(e.target.value);
  }
  const handleClick = (e) => {
    console.log(name,dept,id,structure,slogan,recYear,advisor,secretary,website,whatsapp,desc)
  }

  return (
    <div className="container mx-auto min-h-screen">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Club Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Primary Details of the Club
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                        value={name}
                        onChange={handleName}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Department (If any)
                      </label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                        onChange={handleDept}
                        value={dept}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="clubid"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Club Id
                      </label>
                      <input
                        type="text"
                        value={id}
                        onChange={handleId}
                        name="clubid"
                        id="clubid"
                        autoComplete="email"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="structure"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Structure
                      </label>
                      <select
                        value={structure}
                        onChange={handleStructure}
                        id="structure"
                        name="structure"
                        autoComplete="structure-name"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      >
                        <option>Club</option>
                        <option>Association</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="slogan"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Slogan
                      </label>
                      <input
                        type="text"
                        value={slogan}
                        onChange={handleSlogan}
                        name="slogan"
                        id="slogan"
                        autoComplete="slogan"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="ryear"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Recruitment Year
                      </label>
                      <input
                        type="text"
                        value={recYear}
                        onChange={handleRecYear}
                        name="ryear"
                        id="ryear"
                        autoComplete="ryear"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="faculty"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Faculty Advisor
                      </label>
                      <input
                        type="text"
                        value={advisor}
                        onChange={handleAdvisor}
                        name="faculty"
                        id="faculty"
                        autoComplete="address-level1"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="secretary"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Student Secretary
                      </label>
                      <input
                        type="text"
                        value={secretary}
                        onChange={handleSecretary}
                        name="secretary"
                        id="secretary"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-violet-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Club Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly in your club
                profile.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Website
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          value={website}
                          onChange={handleWebsite}
                          className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                          placeholder="  www.ClubUpload.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="whatsapp"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Whatsapp Number/Link
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                          wa.me/
                        </span>
                        <input
                          type="text"
                          name="whatsapp"
                          id="whatsapp"
                          value={whatsapp}
                          onChange={handleWhatsapp}
                          className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                          placeholder="  Whatsapp Number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      About
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={7}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="  Describe your club in detail."
                        value={desc}
                        onChange={handleDesc}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your Club.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Cover photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-violet-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 hover:text-violet-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="whatsapp"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Recruitment Link
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                          G-Forms Link:
                        </span>
                        <input
                          type="text"
                          name="whatsapp"
                          id="whatsapp"
                          className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                          placeholder="  Forms link for registration"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="inline-flex justify-center rounded-md bg-violet-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
}

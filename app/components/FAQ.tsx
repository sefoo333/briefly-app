import React from 'react'

function FAQ() {
  return (
<div className="flow-root">
  <div className="container my-10 mb-30">
    <div className="-my-4 flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
    <details className="group py-7 [&_summary::-webkit-details-marker]:hidden" open>
      <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
        <h2 className="text-lg font-medium">What is Briefly App What is its benefit?</h2>

        <svg
          className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="pt-4 text-gray-900 dark:text-white">
           Briefly is an AI-powered app designed to help students summarize lessons quickly and clearly. It supports text, PDFs, and audio, generating concise summaries with just one tap. Users can format their notes freely using a rich-text editor. The app offers smart organization, easy sharing, and learns your preferred style over time. Briefly saves time, boosts focus, and simplifies studying.

      </p>
    </details>

    <details className="group py-7 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
        <h2 className="text-lg font-medium">Briefly is free? </h2>

        <svg
          className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="pt-4 text-gray-900 dark:text-white">
              yes it's free 100%

      </p>
    </details>

    <details className="group py-7 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
        <h2 className="text-lg font-medium">Is have a community to briefly app??</h2>

        <svg
          className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="pt-4 text-gray-900 dark:text-white">
               Yes, Briefly is designed to support community features such as sharing summaries, collaborating with classmates, and exchanging study materials. While the core of the app focuses on AI-powered summarization and rich-text editing, it also encourages users to connect and learn together by allowing easy sharing and organization of content. This helps build a helpful, knowledge-driven community around the app. 
      </p>
    </details>
  </div>
  </div>
</div>
  )
}

export default FAQ
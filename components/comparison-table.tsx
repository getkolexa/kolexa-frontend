import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    {
      name: "Data Ownership",
      traditional: "Institutions own your data",
      web3: "You own your data and credentials",
    },
    {
      name: "Credential Verification",
      traditional: "Requires contacting institutions",
      web3: "Instant verification via blockchain",
    },
    {
      name: "Learning Incentives",
      traditional: "Grades and certificates only",
      web3: "Earn tokens and NFTs with real value",
    },
    {
      name: "Content Access",
      traditional: "Limited by subscriptions",
      web3: "Learn-to-earn model for access",
    },
    {
      name: "Privacy Control",
      traditional: "Limited control over your data",
      web3: "Full control over what you share",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden min-w-full">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-6 py-4 text-gray-400 font-medium">Feature</th>
              <th className="px-6 py-4 text-gray-400 font-medium">Traditional Education</th>
              <th className="px-6 py-4 text-gray-400 font-medium">Our Web3 Platform</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white/5" : ""}>
                <td className="px-6 py-4 text-white font-medium">{feature.name}</td>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-400 mr-2" />
                    {feature.traditional}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    {feature.web3}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

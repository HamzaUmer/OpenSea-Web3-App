import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'cwv4nbqm',
    dataset: 'production',
    apiVersion: '2022-06-29',
    useCdn: true,
    token: "sk7un8YDrTHCG5olq2LJwDfV7o7ikHKkzXEj7E0FEgs4qMeSV13fgm7jwPdEmPqJdlD4Jj315otDnb4tjcg3plPwz6uq0gI1WtpUHyRoBwt9XY8jOD5ocSdWQQkITNPxvlsfugmimCfqu8CcBtII2YgFAA6TJSarA35TPwfqojPOa962F0hs",
    ignoreBrowserTokenWarning: true
})
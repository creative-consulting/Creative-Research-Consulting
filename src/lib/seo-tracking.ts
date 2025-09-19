export const trackKeywordRanking = async (keywords: string[]) => {
    // This would integrate with rank tracking APIs
    const rankings = []

    for (const keyword of keywords) {
        try {
            // Example with SerpAPI (you'd need to implement this)
            const response = await fetch(`/api/rank-tracking?keyword=${encodeURIComponent(keyword)}`)
            const data = await response.json()

            rankings.push({
                keyword,
                position: data.position,
                url: data.url,
                date: new Date().toISOString()
            })
        } catch (error) {
            console.error(`Error tracking keyword: ${keyword}`, error)
        }
    }

    return rankings
}
// Priority keywords to track
export const priorityKeywords = [
    'market research company in Bangladesh',
    'social research agency in Bangladesh',
    'Bangladesh fieldwork partner for research',
    'CAPI surveys in Bangladesh',
    'CATI services Bangladesh',
    'CAWI online panel Bangladesh',
    'FGD recruitment Bangladesh',
    'best research firm in Bangladesh',
    'opinion poll company Bangladesh',
    'survey company Bangladesh'
]
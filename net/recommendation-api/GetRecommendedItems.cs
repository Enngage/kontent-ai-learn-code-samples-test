// DocSection: recommendation_api_get_recommended_items
using Kentico.Kontent.Recommender;

RecommendationClient recommendationClient = new RecommendationClient("<YOUR_API_KEY>", timeout_seconds);
RecommendedContentItem[] recommendedArticles = await recommendationClient.GetRecommendationsAsync("visitor01","item_codename_0", 3, "blog");
// EndDocSection
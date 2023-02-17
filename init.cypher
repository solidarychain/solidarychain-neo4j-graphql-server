// delete all nodes and relationships
// MATCH (n) DETACH DELETE n;
// index's
CREATE FULLTEXT INDEX businessNameIndex FOR (b:Business) ON EACH [b.name]
// constraints
CREATE CONSTRAINT constraint_business_id ON (business:Business) ASSERT business.businessId IS UNIQUE;
CREATE CONSTRAINT constraint_category_id ON (category:Category) ASSERT category.categoryId IS UNIQUE;
CREATE CONSTRAINT constraint_review_id ON (review:Review) ASSERT review.reviewId IS UNIQUE;
CREATE CONSTRAINT constraint_user_name ON (user:User) ASSERT user.name IS UNIQUE;

const HYGRAPH_KEY =
	'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDQ3NDE5MDIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xuZGNid3Y4MW9yeDAxc3poaWZpZ29zbS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNWVkZDFhYTctZTY2ZS00M2NiLWIwODQtNGVlMjhmOTZiODAxIiwianRpIjoiY2xyNWJiYXJsMWR4aTAxbWU1MnB2MmE5aiJ9.bkCCn7inKu7EvPwAxrjnN1f18mlAhxm7Ft-fGzOHwC93Mdp5ztgveKZPN34hR1oIT-nKZBWBPga-uUjyQoD6hJBiueN3zuZZntGbLHZfrt2IEs25j0_gJp4UFZGzDnw54Infl-86nPkB1WsKNLqinfDmDptXgguaBjCzLI5pPpTDkO5sEvyWqsBnbPTxJF0jPs8ZH99EnwQ8vJwGPd6amQBAUd1__ScScK3BkKFQS1cRRH5T5NVkF5QCzpDBBQXuzrqq3AwyLiW62euTveGgvDhYQLairRJBvsDmeJ6cItIA_awJcsLDTmS5SSGkWnyc2zx4LeK71qRrhyV8UsjMzqvQlj9aJlkAipqaWRsz3_3UG7vdNKIhiZQkjAD59zVT5LgRmSGUWejVg3rvHf1e-6qq2RLQk9yQoZx3cVEavNsKcDPVLU7a5XO17fr0qWI5N-hZSBaV94GY5ww56N5KtUJ15t3UbI2bHEri0eiNk-msNGWrTkC8MPEuo_8KyYaIdZBRrU7Fq6HWck-GNRQqs1W-gnGaXYhW4wDa40bQjhy4PehAWyPpwSHA43pegFq7Q4-jduU_4w1p_ctjadCuspNAZJddsYpWxoQFJmFNZdQn1pv7cP_lkfZSWC6Rpz1UvTgwu3L-j7-J03kXigIDlpJtt-q1ysFJ9TI5sCV2r7g';
const HYGRAPH_URL = 'https://api-eu-west-2.hygraph.com/v2/clndcbwv81orx01szhifigosm/master';

import { GraphQLClient } from 'graphql-request';

console.log(HYGRAPH_URL);

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: {
		Authorization: `Bearer ${HYGRAPH_KEY}`
	}
});

const Movie = require('./models/Movie');

const resolvers = {
  Query: {
    movies: async () => await Movie.find(),
    movie: async (_, { id }) => await Movie.findById(id),
  },

  Mutation: {
    addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
      const movie = new Movie({ name, director_name, production_house, release_date, rating });
      await movie.save();
      return movie;
    },

    deleteMovie: async (_, { id }) => {
      return await Movie.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;

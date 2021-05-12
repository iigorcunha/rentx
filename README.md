# Car registry

**FR**
- Should be possible register a new car


**BR**

- Should not be possible register twice a car with same plate number.
- The car should be register available by default.
- An admin user should be responsible to register a car.


# Car list

**FR**

- Should be possible to list all cars available.
- Should be possible to list all cars available by category.
- Should be possible to list all cars available by brand.
- Should be possible to list all cars available by car name.

**BR**
- is not necessary to be logged.


# Car specification registry

**FR**
- Should be possible to register one specification to a car.
- Should be possible to list all specifications.
- Should be possible to list all cars.

**BR**
- Should not be able to register a specification to a non-registered car.
- Should not be able to register the same specification twice to the same car.
- An admin user should be responsible to register a specifications.


# Car image registry

**FR**
- Should be possible to register a car image.

**NFR**
- Use multer to do file upload.

**BR**
- User should be able register more than one image to the same car.
- An admin user should be responsible to register a car image.

# Rent car
**FR**

- Should be possible register a rental.

**BR**
- The rental should have 24 hours minimum.
- Should not be able to register a new rental if exists a rental open to the same user.
- Should not be able to register a new rental if exists a retal open to the same car.

//Unit Test for Product List Component

it('renders the product list with items from the API', async () => {
    // Mock the API call
    mockFetchProducts.mockResolvedValueOnce(sampleProductData);
  
    // Render the component
    render(<ProductList />);
  
    // Check for the presence of products
    for (const product of sampleProductData) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
      expect(screen.getByAltText(`${product.name} image`)).toBeInTheDocument();
    }
  });
  

  //Unit Test for Login Functionality:
  it('allows the user to log in with correct credentials', async () => {
    // Set up the mock for a successful login
    mockLoginApi.mockResolvedValueOnce({ success: true, token: 'fake-token' });
  
    // Render the component
    render(<Login />);
  
    // Fill in the form fields
    userEvent.type(screen.getByLabelText(/username/i), 'testUser');
    userEvent.type(screen.getByLabelText(/password/i), 'testPass');
  
    // Submit the form
    userEvent.click(screen.getByRole('button', { name: /log in/i }));
  
    // Assert the expected outcome
    await waitFor(() => {
      expect(screen.getByText(/you are logged in/i)).toBeInTheDocument();
    });
  });
  
import numpy as np
import matplotlib.pyplot as plt

# Define the piecewise function
def y(t):
    return np.piecewise(
        t,
        [t < -1, (-1 <= t) & (t < 2), t >= 2],
        [0, lambda t: t - 1, 3]
    )

# Define the range for t
t = np.linspace(-3, 4, 500)

# Calculate y(t)
y_values = y(t)

# Plot the graph
plt.figure(figsize=(8, 6))
plt.plot(t, y_values, label="y(t)", color="blue")
plt.title("Piecewise Function y(t)")
plt.xlabel("t")
plt.ylabel("y(t)")
plt.axhline(0, color="black", linewidth=0.5, linestyle="--")
plt.axvline(0, color="black", linewidth=0.5, linestyle="--")
plt.grid(color="gray", linestyle="--", linewidth=0.5)
plt.legend()
plt.show()

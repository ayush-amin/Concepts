---
title: Learning Log
description: Running log of things I learned, newest first.
---

# Learning Log

Running log of things I picked up — a few lines each, newest at the top. Anything that grows past a handful of bullets gets promoted to its own note.

---

## 2026-09-06 — Neural nets and transformers (3Blue1Brown)

**Neurons and layers**

- **Weighted sum** — a neuron computes `w · x + b`, then an activation. A layer is just a matrix multiply: `a₁ = σ(W a₀ + b)`.
- **Sigmoid** — squashes to (0, 1). Saturates at both ends, so gradients vanish; mostly historical now.
- **ReLU** — `max(0, x)`. Cheap, doesn't saturate for positive inputs, trains deep nets far better.

**Training**

- **Cost function** — one number saying how wrong the network is over the training set. Training = minimising it over the weights.
- **Gradient descent** — step downhill: `w ← w − η ∇C`. The gradient says which weights matter most, and by how much.
- **Backpropagation** — the chain rule run backwards through the layers to get `∇C` cheaply. One backward pass yields every weight's gradient.
- **Cross-entropy** — the loss for probability outputs. Penalises confident-and-wrong hard, and pairs with softmax to give clean gradients.

**Transformers / LLMs**

- **Embedding** — token → vector. Directions in that space carry meaning; the classic example is `king − man + woman ≈ queen`.
- **Attention** — each token emits **query**, **key**, **value** vectors. `Q·K` scores how much one token should attend to another, softmax turns scores into weights, and the weighted sum of values updates the token's meaning in context.
- **Multi-head** — several attention patterns run in parallel, each learning a different kind of relationship.
- **Context size** — how many tokens attend to each other at once. Attention cost grows with the square of it, which is why context is expensive.
- **MLP block** — the other half of each layer. Roughly where **facts** live: the up-projection tests "is this concept present?", the down-projection adds the associated fact back into the vector.
- **Unembedding** — final matrix mapping the last vector back to a logit per vocabulary token.
- **Softmax** — logits → probabilities. **Temperature** divides logits first: low temp sharpens toward the top token, high temp flattens toward variety, T = 0 is greedy.

Source: 3Blue1Brown's [Neural networks playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi).

---

## 2026-09-05 — Log started

- This file is the running log; entries go newest-first under a `## YYYY-MM-DD — Topic` heading.
- Keep entries to ~3–6 bullets. If it needs a diagram, it needs its own note.
